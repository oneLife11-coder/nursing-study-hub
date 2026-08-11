// ============================================================================
// NURSING STUDY HUB
// STATISTICS — COMPLETE COURSE
// Nursing / Health Sciences Prerequisite Statistics
// ============================================================================

document.addEventListener("DOMContentLoaded", function () {

    // ========================================================================
    // COURSE SETTINGS
    // ========================================================================

    const COURSE_TITLE = "Statistics";
    const PASS_SCORE = 90;
    const TOPIC_QUIZ_LENGTH = 12;
    const MIXED_PRACTICE_LENGTH = 30;
    const FINAL_EXAM_LENGTH = 60;
    const SHARED_QUESTIONS_KEY = "nursingStudyHubQuestionsAnswered";

    // ========================================================================
    // MODULES
    // ========================================================================

    const MODULES = [
        {
            number: 1,
            title: "Data, Variables & Descriptive Statistics"
        },
        {
            number: 2,
            title: "Probability & Probability Distributions"
        },
        {
            number: 3,
            title: "Normal Distribution, Z-Scores & Sampling"
        },
        {
            number: 4,
            title: "Confidence Intervals & Estimation"
        },
        {
            number: 5,
            title: "Hypothesis Testing"
        },
        {
            number: 6,
            title: "Correlation, Regression & Group Comparisons"
        },
        {
            number: 7,
            title: "Healthcare Statistics & Research Interpretation"
        }
    ];

    // ========================================================================
    // DATA HELPERS
    // ========================================================================

    function topic(
        id,
        number,
        module,
        title,
        description,
        objectives,
        facts,
        formulas,
        sections,
        worked,
        practice,
        clinical,
        traps,
        memory,
        summary,
        questions,
        tags = ["Theory", "Calculation", "Quiz"]
    ) {
        return {
            id,
            number,
            module,
            title,
            description,
            objectives,
            facts,
            formulas,
            sections,
            worked,
            practice,
            clinical,
            traps,
            memory,
            summary,
            questions,
            tags
        };
    }

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

    // ========================================================================
    // COMPLETE STATISTICS COURSE
    // ========================================================================

    const STAT_TOPICS = [

        // ====================================================================
        // MODULE 1
        // ====================================================================

        topic(
            "intro-statistics",
            1,
            1,
            "Introduction to Statistics & Data",
            "Learn what statistics measures, how populations differ from samples, and how descriptive and inferential statistics are used in healthcare.",
            [
                "Define statistics, data, population and sample.",
                "Differentiate descriptive and inferential statistics.",
                "Differentiate parameters and statistics.",
                "Explain why samples are used.",
                "Recognize examples from nursing and healthcare research."
            ],
            [
                ["Statistics", "The science of collecting, organizing, analyzing and interpreting data."],
                ["Population", "The complete group of individuals or observations of interest."],
                ["Sample", "A subset of the population used for study."],
                ["Parameter", "Numerical characteristic describing a population."],
                ["Statistic", "Numerical characteristic calculated from a sample."],
                ["Descriptive statistics", "Methods used to summarize and organize observed data."],
                ["Inferential statistics", "Methods used to draw conclusions about a population from sample data."],
                ["Data", "Observed values or measurements collected for analysis."]
            ],
            [],
            [
                section(
                    "FOUNDATION",
                    "Why Statistics Matters in Healthcare",
                    [
                        "Healthcare decisions constantly involve data. Nurses encounter infection rates, medication error rates, blood pressure trends, readmission rates, research findings and quality-improvement measures.",
                        "Statistics provides tools for turning raw observations into information. Instead of looking at dozens of individual measurements, statistics can summarize the typical value, variability and relationships between variables.",
                        "Inferential statistics goes further by asking whether findings observed in a sample are likely to reflect the larger population."
                    ]
                ),
                section(
                    "POPULATION VS SAMPLE",
                    "Studying Everyone Is Often Impossible",
                    [
                        "A population contains every individual or observation that fits the research question. A sample contains only part of that population.",
                        "Researchers usually study samples because studying an entire population may be too expensive, time consuming or impossible.",
                        "The quality of conclusions depends heavily on whether the sample reasonably represents the population."
                    ]
                ),
                section(
                    "PARAMETER VS STATISTIC",
                    "Population Numbers and Sample Numbers",
                    [
                        "A parameter describes a population. For example, the true average systolic blood pressure of every adult in a state would be a population parameter.",
                        "A statistic describes a sample. The average systolic blood pressure of 500 adults selected from that state would be a sample statistic.",
                        "Inferential statistics uses sample statistics to estimate unknown population parameters."
                    ]
                ),
                section(
                    "DESCRIPTIVE STATISTICS",
                    "Summarizing What Was Observed",
                    [
                        "Descriptive statistics includes tables, graphs, percentages, means, medians, ranges and standard deviations.",
                        "These methods describe the observed data without claiming that the same pattern necessarily exists in the entire population.",
                        "Descriptive statistics is usually the first step in understanding a dataset."
                    ]
                ),
                section(
                    "INFERENTIAL STATISTICS",
                    "Generalizing Beyond the Sample",
                    [
                        "Inferential statistics uses probability to quantify uncertainty.",
                        "Confidence intervals estimate plausible values for population parameters.",
                        "Hypothesis tests evaluate whether observed differences or relationships are unlikely to be explained by random sampling variation alone."
                    ]
                )
            ],
            [],
            [
                practice(
                    "A hospital wants to know the average waiting time for all 18,000 emergency-department visits last year. Researchers randomly review 600 visits. Identify the population and sample.",
                    "Population = all 18,000 ED visits; sample = the 600 reviewed visits.",
                    [
                        "Identify the entire group of interest.",
                        "The complete group is all 18,000 ED visits.",
                        "Identify the subset actually analyzed.",
                        "The subset is the 600 reviewed visits."
                    ]
                ),
                practice(
                    "The average wait time calculated from those 600 visits is 42 minutes. Is 42 minutes a parameter or a statistic?",
                    "Statistic.",
                    [
                        "The value was calculated from a sample.",
                        "A numerical summary calculated from a sample is a statistic."
                    ]
                )
            ],
            {
                title: "Hospital Quality Dashboard",
                scenario: "A hospital reports its monthly fall rate, average length of stay and 30-day readmission rate.",
                connection: "These are descriptive statistics because they summarize observed healthcare outcomes."
            },
            [
                "A sample is not automatically representative just because it is large.",
                "A population parameter and sample statistic are different concepts.",
                "Descriptive statistics summarizes observed data; inferential statistics generalizes beyond it."
            ],
            [
                "POPULATION = everybody you care about.",
                "SAMPLE = smaller group actually studied.",
                "PARAMETER = population number.",
                "STATISTIC = sample number."
            ],
            [
                "Statistics transforms data into useful information.",
                "Populations are complete groups.",
                "Samples are subsets.",
                "Parameters describe populations.",
                "Statistics describe samples.",
                "Descriptive statistics summarizes data.",
                "Inferential statistics draws conclusions beyond the sample."
            ],
            [
                {
                    id: "intro1",
                    type: "mcq",
                    q: "A researcher calculates the average heart rate of 250 randomly selected adults. That average is best classified as a:",
                    choices: [
                        "Statistic",
                        "Population",
                        "Parameter",
                        "Variable type"
                    ],
                    answer: 0,
                    explanation: "The value was calculated from a sample, so it is a statistic."
                },
                {
                    id: "intro2",
                    type: "mcq",
                    q: "Which branch of statistics is used to estimate a population characteristic from sample data?",
                    choices: [
                        "Inferential statistics",
                        "Descriptive statistics only",
                        "Anatomy",
                        "Microbiology"
                    ],
                    answer: 0,
                    explanation: "Inferential statistics uses sample information to make conclusions about populations."
                }
            ]
        ),

        topic(
            "variables-scales",
            2,
            1,
            "Variables, Data Types & Levels of Measurement",
            "Master categorical versus quantitative variables and the nominal, ordinal, interval and ratio levels of measurement.",
            [
                "Define a variable.",
                "Differentiate categorical and quantitative data.",
                "Differentiate discrete and continuous variables.",
                "Identify nominal, ordinal, interval and ratio levels.",
                "Choose appropriate summaries for different data types."
            ],
            [
                ["Variable", "A characteristic that can take different values among individuals or observations."],
                ["Categorical variable", "Variable placing observations into groups or categories."],
                ["Quantitative variable", "Variable representing numerical amount or measurement."],
                ["Discrete variable", "Quantitative variable usually obtained by counting."],
                ["Continuous variable", "Quantitative variable capable of taking values throughout an interval."],
                ["Nominal", "Categorical level with no meaningful order."],
                ["Ordinal", "Categorical level with meaningful order but unequal or unknown spacing."],
                ["Interval", "Numeric scale with equal intervals but no true zero."],
                ["Ratio", "Numeric scale with equal intervals and a meaningful zero."]
            ],
            [],
            [
                section(
                    "VARIABLES",
                    "Every Dataset Is Built From Variables",
                    [
                        "A variable is any characteristic that differs among observations. Examples include age, blood pressure, sex, pain rating and smoking status.",
                        "Correctly identifying the type of variable determines which graphs, summary measures and statistical tests are appropriate.",
                        "Using a statistical method designed for continuous data on purely categorical data can produce meaningless results."
                    ]
                ),
                section(
                    "CATEGORICAL DATA",
                    "Groups Rather Than Numerical Amounts",
                    [
                        "Categorical variables classify observations into categories.",
                        "Examples include blood type, diagnosis category, insurance status and medication group.",
                        "The numbers sometimes assigned to categories are labels, not mathematical quantities."
                    ]
                ),
                section(
                    "DISCRETE VS CONTINUOUS",
                    "Counts and Measurements",
                    [
                        "Discrete variables usually arise from counting. Number of hospital admissions is discrete because values such as 3.7 admissions are not meaningful.",
                        "Continuous variables are measurements. Weight, temperature and blood pressure can theoretically take many values within an interval.",
                        "A continuous variable may be rounded when recorded, but the underlying concept remains continuous."
                    ]
                ),
                section(
                    "LEVELS OF MEASUREMENT",
                    "Nominal, Ordinal, Interval and Ratio",
                    [
                        "Nominal data contains categories without order, such as blood type.",
                        "Ordinal data contains ordered categories, such as mild, moderate and severe pain.",
                        "Interval data has equal spacing but lacks a true zero. Temperature in Celsius is the classic example.",
                        "Ratio data has equal spacing and a true zero. Weight, height, age and heart rate are common examples."
                    ],
                    [
                        ["Level", "Ordered?", "Equal Intervals?", "True Zero?", "Example"],
                        ["Nominal", "No", "No", "No", "Blood type"],
                        ["Ordinal", "Yes", "Not required", "No", "Pain category"],
                        ["Interval", "Yes", "Yes", "No", "°C temperature"],
                        ["Ratio", "Yes", "Yes", "Yes", "Weight"]
                    ]
                ),
                section(
                    "WHY IT MATTERS",
                    "Measurement Level Guides Analysis",
                    [
                        "Nominal data is often summarized with frequencies and percentages.",
                        "Ordinal data can use medians and rank-based methods.",
                        "Interval and ratio data support arithmetic operations such as calculating means and standard deviations."
                    ]
                )
            ],
            [],
            [
                practice(
                    "Classify blood type A, B, AB or O.",
                    "Nominal categorical variable.",
                    [
                        "The values are categories.",
                        "There is no meaningful ranking among blood groups."
                    ]
                ),
                practice(
                    "Classify patient pain recorded as mild, moderate or severe.",
                    "Ordinal categorical variable.",
                    [
                        "The categories have a meaningful order.",
                        "The distance between mild and moderate is not guaranteed to equal the distance between moderate and severe."
                    ]
                ),
                practice(
                    "Classify body weight in kilograms.",
                    "Ratio quantitative continuous variable.",
                    [
                        "Weight is numerical.",
                        "It can vary continuously.",
                        "Zero kilograms represents absence of measured weight."
                    ]
                )
            ],
            {
                title: "Pain Scores",
                scenario: "A study records pain as none, mild, moderate or severe.",
                connection: "These values are ordinal because they can be ranked, but the exact distance between categories is not known."
            },
            [
                "Numbers used as category labels do not automatically make a variable quantitative.",
                "Ordinal categories are ordered, but their spacing is not necessarily equal.",
                "Continuous variables can be rounded in actual datasets."
            ],
            [
                "NOMINAL = names.",
                "ORDINAL = ordered.",
                "INTERVAL = equal intervals, no true zero.",
                "RATIO = real zero."
            ],
            [
                "Variables describe changing characteristics.",
                "Categorical data forms groups.",
                "Quantitative data represents numerical amounts.",
                "Discrete data is usually counted.",
                "Continuous data is measured.",
                "Nominal has no order.",
                "Ordinal has order.",
                "Ratio data has a meaningful zero."
            ],
            [
                {
                    id: "var1",
                    type: "mcq",
                    q: "Which level of measurement best describes blood type?",
                    choices: [
                        "Nominal",
                        "Ordinal",
                        "Interval",
                        "Ratio"
                    ],
                    answer: 0,
                    explanation: "Blood types are categories without a natural ordering."
                },
                {
                    id: "var2",
                    type: "mcq",
                    q: "Which variable is continuous?",
                    choices: [
                        "Body temperature",
                        "Number of children",
                        "Number of medications",
                        "Room number"
                    ],
                    answer: 0,
                    explanation: "Temperature can theoretically take any value within a range and is therefore continuous."
                }
            ]
        ),

        topic(
            "study-design-sampling",
            3,
            1,
            "Study Design, Sampling, Bias & Confounding",
            "Learn how random sampling, random assignment, observational studies, experiments, bias and confounding affect research conclusions.",
            [
                "Differentiate observational and experimental studies.",
                "Differentiate random sampling and random assignment.",
                "Define bias and confounding.",
                "Describe common sampling methods.",
                "Explain why association does not automatically prove causation."
            ],
            [
                ["Observational study", "Study in which investigators observe exposures and outcomes without assigning treatment."],
                ["Experiment", "Study in which investigators assign an intervention or treatment."],
                ["Random sampling", "Selecting participants using chance to improve population representation."],
                ["Random assignment", "Assigning study participants to treatment groups using chance."],
                ["Bias", "Systematic error that distorts study findings."],
                ["Confounding", "Distortion of an exposure-outcome relationship by a third variable related to both."],
                ["Convenience sample", "Sample selected because participants are easy to access."],
                ["Simple random sample", "Sample in which each population member has a known chance of selection."]
            ],
            [],
            [
                section(
                    "OBSERVATIONAL STUDIES",
                    "Researchers Observe Rather Than Assign",
                    [
                        "In an observational study, investigators measure exposures and outcomes as they naturally occur.",
                        "Examples include cohort studies, case-control studies and cross-sectional surveys.",
                        "Observational studies can identify associations but are more vulnerable to confounding than randomized experiments."
                    ]
                ),
                section(
                    "EXPERIMENTS",
                    "Researchers Assign an Intervention",
                    [
                        "Experiments involve deliberate assignment of treatment or exposure.",
                        "Randomized controlled trials use random assignment to distribute known and unknown confounders more evenly between groups.",
                        "Random assignment strengthens causal inference when the study is well designed."
                    ]
                ),
                section(
                    "RANDOM SAMPLING",
                    "Representation of the Population",
                    [
                        "Random sampling addresses how participants are selected from the population.",
                        "Good probability sampling improves generalizability.",
                        "A study can have excellent random assignment but still use a nonrepresentative sample."
                    ]
                ),
                section(
                    "BIAS",
                    "Systematic Error Is Different From Random Variation",
                    [
                        "Selection bias occurs when participants differ systematically from the target population.",
                        "Response bias occurs when answers are influenced by how questions are asked or by social desirability.",
                        "Measurement bias occurs when data collection systematically overestimates or underestimates the true value."
                    ]
                ),
                section(
                    "CONFOUNDING",
                    "A Third Variable Can Create a Misleading Association",
                    [
                        "A confounder is related to both the exposure and the outcome.",
                        "Suppose coffee drinking appears related to heart disease, but coffee drinkers in the sample also smoke more often. Smoking may confound the coffee-heart disease relationship.",
                        "Randomization, restriction, matching and statistical adjustment can help reduce confounding."
                    ]
                )
            ],
            [],
            [
                practice(
                    "Researchers randomly assign 200 patients to receive drug A or placebo. Is random assignment mainly used to improve representativeness or balance confounders?",
                    "Balance confounders between treatment groups.",
                    [
                        "Random assignment determines group allocation after participants enter the study.",
                        "Its main purpose is to make groups comparable."
                    ]
                ),
                practice(
                    "A researcher surveys only students who happen to be sitting in the cafeteria at noon. What sampling method is this?",
                    "Convenience sampling.",
                    [
                        "Participants are chosen because they are easy to access.",
                        "This may introduce selection bias."
                    ]
                )
            ],
            {
                title: "Medication Trial",
                scenario: "Patients are randomly assigned to a new antihypertensive drug or standard therapy.",
                connection: "Random assignment helps balance confounding variables between groups, strengthening causal interpretation."
            },
            [
                "Random sampling and random assignment solve different problems.",
                "Association does not automatically establish causation.",
                "Large samples can still be biased."
            ],
            [
                "RANDOM SAMPLE = who enters.",
                "RANDOM ASSIGNMENT = which group they enter.",
                "BIAS = systematic problem.",
                "CONFOUNDER = third variable."
            ],
            [
                "Observational studies do not assign treatment.",
                "Experiments assign interventions.",
                "Random sampling improves representativeness.",
                "Random assignment improves comparability.",
                "Bias is systematic error.",
                "Confounding can distort associations."
            ],
            [
                {
                    id: "design1",
                    type: "mcq",
                    q: "What is the main purpose of random assignment in a clinical trial?",
                    choices: [
                        "Balance confounding variables between treatment groups",
                        "Guarantee the sample represents every person in the country",
                        "Increase the population size",
                        "Eliminate all measurement error"
                    ],
                    answer: 0,
                    explanation: "Random assignment tends to distribute confounders across groups and strengthens causal inference."
                },
                {
                    id: "design2",
                    type: "mcq",
                    q: "A study observes smoking behavior and later lung cancer outcomes without assigning smoking exposure. This is:",
                    choices: [
                        "Observational",
                        "Randomized experimental",
                        "Laboratory sterilization",
                        "A paired t test"
                    ],
                    answer: 0,
                    explanation: "Researchers observe natural exposure rather than assigning smoking."
                }
            ],
            ["Research", "Theory", "Clinical"]
        ),

        topic(
            "tables-graphs",
            4,
            1,
            "Frequency Tables, Histograms, Bar Graphs & Distribution Shape",
            "Learn to organize data and select appropriate visual displays for categorical and quantitative variables.",
            [
                "Construct and interpret frequency tables.",
                "Differentiate bar graphs and histograms.",
                "Interpret relative frequency.",
                "Recognize symmetric and skewed distributions.",
                "Identify outliers and clusters."
            ],
            [
                ["Frequency", "Number of observations in a category or interval."],
                ["Relative frequency", "Proportion or percentage of observations in a category."],
                ["Bar graph", "Graph displaying categorical frequencies with separated bars."],
                ["Histogram", "Graph displaying quantitative distributions using touching intervals."],
                ["Distribution", "Pattern of values taken by a variable."],
                ["Right-skewed", "Distribution with a longer tail toward larger values."],
                ["Left-skewed", "Distribution with a longer tail toward smaller values."],
                ["Outlier", "Observation unusually far from most other values."]
            ],
            [
                "Relative frequency = category frequency ÷ total frequency"
            ],
            [
                section(
                    "FREQUENCY TABLES",
                    "Count How Often Values Occur",
                    [
                        "A frequency table organizes observations into categories or numerical intervals.",
                        "For categorical data, each row usually represents one category.",
                        "Relative frequency converts counts into proportions or percentages, making groups easier to compare."
                    ]
                ),
                section(
                    "BAR GRAPHS",
                    "Categorical Data",
                    [
                        "Bar graphs are used for categorical variables.",
                        "Bars are separated because categories are distinct rather than continuous.",
                        "The height of each bar represents a count or relative frequency."
                    ]
                ),
                section(
                    "HISTOGRAMS",
                    "Quantitative Distributions",
                    [
                        "Histograms group numerical values into intervals called bins.",
                        "Bars touch because the quantitative scale is continuous across adjacent intervals.",
                        "Histograms reveal center, spread, skewness, clusters and possible outliers."
                    ]
                ),
                section(
                    "SKEWNESS",
                    "Follow the Tail",
                    [
                        "A right-skewed distribution has a long tail extending toward high values.",
                        "A left-skewed distribution has a long tail extending toward low values.",
                        "The direction of skew is named after the direction of the long tail, not the location of most observations."
                    ]
                ),
                section(
                    "HEALTHCARE EXAMPLE",
                    "Length of Stay Is Often Right-Skewed",
                    [
                        "Many patients may have short hospital stays, while a smaller number have very long stays.",
                        "Those long stays create a tail toward higher values.",
                        "This can pull the mean above the median."
                    ]
                )
            ],
            [
                worked(
                    "Relative Frequency",
                    "In a clinic, 25 of 100 patients report smoking. What is the relative frequency?",
                    [
                        "Relative frequency = frequency ÷ total.",
                        "25 ÷ 100 = 0.25.",
                        "Convert to a percentage: 0.25 × 100 = 25%."
                    ],
                    "25%"
                )
            ],
            [
                practice(
                    "A hospital has 12 falls during 400 admissions. What proportion of admissions involved a fall?",
                    "0.03 or 3%.",
                    [
                        "Divide 12 by 400.",
                        "12 ÷ 400 = 0.03.",
                        "Multiply by 100 for percentage = 3%."
                    ]
                ),
                practice(
                    "Which graph is generally best for displaying the distribution of patient ages?",
                    "Histogram.",
                    [
                        "Age is quantitative.",
                        "Histograms are designed to display quantitative distributions."
                    ]
                )
            ],
            {
                title: "Length-of-Stay Distribution",
                scenario: "Most patients stay 2 to 4 days, but a few remain hospitalized for several weeks.",
                connection: "The distribution is likely right-skewed because the unusually long stays create a tail toward larger values."
            },
            [
                "Histograms are for quantitative data; bar graphs are typically for categorical data.",
                "Skew direction follows the tail.",
                "Relative frequency is a proportion, not a raw count."
            ],
            [
                "BAR = categories with gaps.",
                "HISTOGRAM = numbers with touching bars.",
                "RIGHT SKEW = tail points right."
            ],
            [
                "Frequency counts observations.",
                "Relative frequency expresses proportions.",
                "Bar graphs display categories.",
                "Histograms display quantitative distributions.",
                "Skewness is named for the tail direction.",
                "Outliers can strongly affect summary statistics."
            ],
            [
                {
                    id: "graph1",
                    type: "mcq",
                    q: "Which graph is most appropriate for displaying the distribution of systolic blood pressure measurements?",
                    choices: [
                        "Histogram",
                        "Bar graph of unrelated categories",
                        "Pie chart only",
                        "No graph can display blood pressure"
                    ],
                    answer: 0,
                    explanation: "Blood pressure is quantitative, making a histogram appropriate for displaying its distribution."
                },
                {
                    id: "graph2",
                    type: "mcq",
                    q: "A distribution has most observations at lower values with a long tail toward higher values. It is:",
                    choices: [
                        "Right-skewed",
                        "Left-skewed",
                        "Perfectly symmetric",
                        "Nominal"
                    ],
                    answer: 0,
                    explanation: "Skew direction is named for the direction of the long tail."
                }
            ]
        ),

        topic(
            "mean-median-mode",
            5,
            1,
            "Mean, Median & Mode",
            "Master the three major measures of central tendency and learn when skewness and outliers make one measure preferable to another.",
            [
                "Calculate the arithmetic mean.",
                "Calculate the median.",
                "Identify the mode.",
                "Explain how outliers affect the mean.",
                "Choose an appropriate center for symmetric and skewed data."
            ],
            [
                ["Mean", "Arithmetic average of numerical values."],
                ["Median", "Middle value after observations are ordered."],
                ["Mode", "Most frequently occurring value."],
                ["Central tendency", "General location of the center of a distribution."],
                ["Robust statistic", "Statistic relatively resistant to extreme values."]
            ],
            [
                "Mean = Σx ÷ n"
            ],
            [
                section(
                    "MEAN",
                    "Add All Values and Divide by the Number of Values",
                    [
                        "The arithmetic mean uses every observation in the dataset.",
                        "Because every value contributes to the total, extreme observations can strongly influence the mean.",
                        "The mean works particularly well for roughly symmetric quantitative data without extreme outliers."
                    ]
                ),
                section(
                    "MEDIAN",
                    "The Middle Ordered Value",
                    [
                        "To find the median, first order observations from smallest to largest.",
                        "If there is an odd number of values, the middle observation is the median.",
                        "If there is an even number of values, average the two middle observations."
                    ]
                ),
                section(
                    "MODE",
                    "The Most Common Value",
                    [
                        "The mode is the value occurring most often.",
                        "A dataset may have one mode, more than one mode or no repeated value.",
                        "Mode can be used with both categorical and numerical variables."
                    ]
                ),
                section(
                    "OUTLIERS",
                    "Mean Is More Sensitive Than Median",
                    [
                        "A very large or very small observation pulls the mean in its direction.",
                        "The median depends mainly on rank position and changes much less.",
                        "For strongly skewed data such as household income or hospital length of stay, the median often better represents a typical case."
                    ]
                ),
                section(
                    "MEAN AND MEDIAN IN SKEWED DATA",
                    "The Tail Pulls the Mean",
                    [
                        "In a right-skewed distribution, large observations generally pull the mean above the median.",
                        "In a left-skewed distribution, low observations generally pull the mean below the median.",
                        "In symmetric distributions, mean and median are often similar."
                    ],
                    [
                        ["Distribution", "Typical Relationship"],
                        ["Symmetric", "Mean ≈ Median"],
                        ["Right-skewed", "Mean > Median"],
                        ["Left-skewed", "Mean < Median"]
                    ]
                )
            ],
            [
                worked(
                    "Calculate the Mean",
                    "Find the mean of 70, 80, 90 and 100.",
                    [
                        "Add the observations: 70 + 80 + 90 + 100 = 340.",
                        "There are 4 observations.",
                        "340 ÷ 4 = 85."
                    ],
                    "85"
                ),
                worked(
                    "Calculate the Median",
                    "Find the median of 3, 5, 8, 10 and 15.",
                    [
                        "The values are already ordered.",
                        "There are 5 observations.",
                        "The middle position is the third value.",
                        "The third value is 8."
                    ],
                    "8"
                )
            ],
            [
                practice(
                    "Find the mean of 4, 6, 8, 10 and 12.",
                    "8.",
                    [
                        "Add the values: 4 + 6 + 8 + 10 + 12 = 40.",
                        "Divide by 5.",
                        "40 ÷ 5 = 8."
                    ]
                ),
                practice(
                    "Find the median of 2, 5, 7, 9, 12 and 20.",
                    "8.",
                    [
                        "There are 6 values, so average the third and fourth values.",
                        "Third = 7 and fourth = 9.",
                        "(7 + 9) ÷ 2 = 8."
                    ]
                ),
                practice(
                    "Which measure is usually more resistant to one extremely large outlier: mean or median?",
                    "Median.",
                    [
                        "The median depends on position rather than magnitude.",
                        "An extreme value can strongly pull the mean."
                    ]
                )
            ],
            {
                title: "Hospital Length of Stay",
                scenario: "Most patients stay 2 to 5 days, but one patient remains hospitalized for 90 days.",
                connection: "The 90-day outlier will substantially increase the mean, while the median will change much less."
            },
            [
                "Always order values before finding the median.",
                "For an even number of observations, the median is the average of the two middle values.",
                "Mode does not have to be unique.",
                "Mean is sensitive to extreme values."
            ],
            [
                "MEAN = mathematical average.",
                "MEDIAN = middle.",
                "MODE = most."
            ],
            [
                "Mean uses every value.",
                "Median is the middle ordered value.",
                "Mode is the most frequent value.",
                "Outliers strongly affect the mean.",
                "Median is more resistant to skewness.",
                "Right skew usually gives mean greater than median."
            ],
            [
                {
                    id: "center1",
                    type: "numeric",
                    q: "What is the mean of 5, 10, 15 and 20?",
                    answer: 12.5,
                    tolerance: 0.001,
                    unit: "",
                    explanation: "5 + 10 + 15 + 20 = 50; 50 ÷ 4 = 12.5."
                },
                {
                    id: "center2",
                    type: "numeric",
                    q: "What is the median of 2, 4, 8, 10, 12 and 18?",
                    answer: 9,
                    tolerance: 0.001,
                    unit: "",
                    explanation: "The middle values are 8 and 10. Their average is 9."
                },
                {
                    id: "center3",
                    type: "mcq",
                    q: "Which measure of center is usually preferred for a strongly right-skewed distribution with extreme high values?",
                    choices: [
                        "Median",
                        "Mean only",
                        "Variance",
                        "Range"
                    ],
                    answer: 0,
                    explanation: "The median is more resistant to extreme observations than the mean."
                }
            ],
            ["Calculation", "Theory", "High Yield"]
        ),

        topic(
            "range-variance-sd",
            6,
            1,
            "Range, Variance & Standard Deviation",
            "Learn how spread is measured and calculate sample variance and sample standard deviation.",
            [
                "Calculate range.",
                "Explain variance.",
                "Explain standard deviation.",
                "Calculate sample variance.",
                "Calculate sample standard deviation.",
                "Interpret standard deviation in context."
            ],
            [
                ["Range", "Maximum value minus minimum value."],
                ["Variance", "Average squared deviation from the mean, adjusted for sample or population context."],
                ["Standard deviation", "Square root of variance."],
                ["Spread", "Extent to which observations differ from one another."],
                ["Deviation", "Difference between an observation and the mean."],
                ["Sample variance", "Variance calculated using n − 1 in the denominator."],
                ["Sample standard deviation", "Square root of sample variance."]
            ],
            [
                "Range = maximum − minimum",
                "Sample variance: s² = Σ(x − x̄)² ÷ (n − 1)",
                "Sample standard deviation: s = √s²"
            ],
            [
                section(
                    "WHY SPREAD MATTERS",
                    "Two Datasets Can Have the Same Mean but Behave Differently",
                    [
                        "A center statistic alone does not describe how dispersed the data is.",
                        "Two patient groups can have the same mean blood pressure but very different variability.",
                        "Measures of spread describe consistency and dispersion."
                    ]
                ),
                section(
                    "RANGE",
                    "Simple but Sensitive to Extremes",
                    [
                        "Range equals the maximum minus the minimum.",
                        "It is easy to calculate but uses only two observations.",
                        "Because it depends entirely on the extremes, one outlier can dramatically change it."
                    ]
                ),
                section(
                    "VARIANCE",
                    "Square the Deviations",
                    [
                        "Variance begins by subtracting the mean from each observation.",
                        "The deviations are squared so positive and negative differences do not cancel.",
                        "For sample variance, the sum of squared deviations is divided by n − 1."
                    ]
                ),
                section(
                    "STANDARD DEVIATION",
                    "Return to the Original Units",
                    [
                        "Standard deviation is the square root of variance.",
                        "Unlike variance, standard deviation is expressed in the same units as the original data.",
                        "A small standard deviation indicates values are clustered near the mean; a large standard deviation indicates greater spread."
                    ]
                ),
                section(
                    "N − 1",
                    "Why Sample Variance Uses One Fewer Degree of Freedom",
                    [
                        "When the sample mean is estimated from the same data, the deviations are constrained to sum to zero.",
                        "Using n − 1 helps correct the tendency of sample variance to underestimate population variability.",
                        "This adjustment is known as Bessel's correction."
                    ]
                )
            ],
            [
                worked(
                    "Sample Standard Deviation",
                    "Find the sample standard deviation of 2, 4 and 6.",
                    [
                        "Mean = (2 + 4 + 6) ÷ 3 = 4.",
                        "Deviations: −2, 0 and 2.",
                        "Squared deviations: 4, 0 and 4.",
                        "Sum = 8.",
                        "Sample variance = 8 ÷ (3 − 1) = 4.",
                        "Standard deviation = √4 = 2."
                    ],
                    "2"
                )
            ],
            [
                practice(
                    "Find the range of 7, 9, 13, 15 and 22.",
                    "15.",
                    [
                        "Maximum = 22.",
                        "Minimum = 7.",
                        "Range = 22 − 7 = 15."
                    ]
                ),
                practice(
                    "If one dataset has SD = 2 and another has SD = 14 on the same measurement scale, which dataset is more variable?",
                    "The dataset with SD = 14.",
                    [
                        "Standard deviation measures typical spread around the mean.",
                        "A larger SD indicates greater dispersion."
                    ]
                )
            ],
            {
                title: "Blood Pressure Variability",
                scenario: "Two units have the same mean systolic blood pressure of 125 mmHg, but one has SD 5 and the other SD 22.",
                connection: "The second unit has much greater patient-to-patient variability despite having the same mean."
            },
            [
                "Variance is in squared units; standard deviation is in original units.",
                "Sample variance commonly uses n − 1.",
                "Range is highly sensitive to outliers."
            ],
            [
                "RANGE = high minus low.",
                "VARIANCE = squared spread.",
                "SD = square root of variance."
            ],
            [
                "Range measures total span.",
                "Variance uses squared deviations.",
                "Sample variance uses n − 1.",
                "Standard deviation returns spread to original units.",
                "Larger standard deviation means greater variability."
            ],
            [
                {
                    id: "spread1",
                    type: "numeric",
                    q: "What is the range of 4, 8, 9, 15 and 19?",
                    answer: 15,
                    tolerance: 0,
                    unit: "",
                    explanation: "Range = 19 − 4 = 15."
                },
                {
                    id: "spread2",
                    type: "mcq",
                    q: "Which statement about standard deviation is correct?",
                    choices: [
                        "It is expressed in the original measurement units.",
                        "It is always equal to the mean.",
                        "It cannot be affected by outliers.",
                        "It is only used for categorical variables."
                    ],
                    answer: 0,
                    explanation: "Standard deviation is the square root of variance and is expressed in the original units."
                }
            ],
            ["Calculation", "High Yield", "Theory"]
        ),

        topic(
            "quartiles-boxplots",
            7,
            1,
            "Percentiles, Quartiles, IQR & Boxplots",
            "Understand percentile ranks, quartiles, interquartile range and outlier detection using the 1.5 × IQR rule.",
            [
                "Define percentiles.",
                "Identify Q1, Q2 and Q3.",
                "Calculate the interquartile range.",
                "Use the 1.5 × IQR rule.",
                "Interpret boxplots."
            ],
            [
                ["Percentile", "Value below which a specified percentage of observations fall."],
                ["Q1", "First quartile, approximately the 25th percentile."],
                ["Q2", "Second quartile, the median."],
                ["Q3", "Third quartile, approximately the 75th percentile."],
                ["IQR", "Interquartile range, Q3 − Q1."],
                ["Lower fence", "Q1 − 1.5 × IQR."],
                ["Upper fence", "Q3 + 1.5 × IQR."],
                ["Boxplot", "Graph displaying median, quartiles and potential outliers."]
            ],
            [
                "IQR = Q3 − Q1",
                "Lower fence = Q1 − 1.5(IQR)",
                "Upper fence = Q3 + 1.5(IQR)"
            ],
            [
                section(
                    "PERCENTILES",
                    "Relative Position in a Distribution",
                    [
                        "A percentile describes the percentage of observations at or below a value.",
                        "A child at the 80th percentile for height is taller than approximately 80% of the reference group.",
                        "Percentiles describe relative standing rather than absolute performance."
                    ]
                ),
                section(
                    "QUARTILES",
                    "Divide Ordered Data Into Four Parts",
                    [
                        "Q1 marks approximately the 25th percentile.",
                        "Q2 is the median or 50th percentile.",
                        "Q3 marks approximately the 75th percentile."
                    ]
                ),
                section(
                    "IQR",
                    "Spread of the Middle 50%",
                    [
                        "The interquartile range equals Q3 minus Q1.",
                        "Because it uses the middle half of the data, the IQR is resistant to extreme observations.",
                        "IQR is often paired with the median when describing skewed distributions."
                    ]
                ),
                section(
                    "OUTLIER FENCES",
                    "The 1.5 × IQR Rule",
                    [
                        "Potential outliers fall below Q1 − 1.5 × IQR or above Q3 + 1.5 × IQR.",
                        "The rule identifies observations far from the central portion of the data.",
                        "An outlier should be investigated rather than automatically deleted."
                    ]
                ),
                section(
                    "BOXPLOTS",
                    "Compact Visual Summary",
                    [
                        "The box typically extends from Q1 to Q3.",
                        "A line inside the box marks the median.",
                        "Whiskers extend toward non-outlying observations, while potential outliers may be plotted individually."
                    ]
                )
            ],
            [
                worked(
                    "IQR and Outlier Fence",
                    "If Q1 = 10 and Q3 = 18, calculate the IQR and upper fence.",
                    [
                        "IQR = 18 − 10 = 8.",
                        "1.5 × IQR = 12.",
                        "Upper fence = 18 + 12 = 30."
                    ],
                    "IQR = 8; upper fence = 30"
                )
            ],
            [
                practice(
                    "If Q1 = 20 and Q3 = 32, what is the IQR?",
                    "12.",
                    [
                        "IQR = Q3 − Q1.",
                        "32 − 20 = 12."
                    ]
                ),
                practice(
                    "With Q1 = 20 and Q3 = 32, what is the upper outlier fence?",
                    "50.",
                    [
                        "IQR = 12.",
                        "1.5 × 12 = 18.",
                        "Upper fence = 32 + 18 = 50."
                    ]
                )
            ],
            {
                title: "Laboratory Values",
                scenario: "A dataset contains several unusually high inflammatory-marker values.",
                connection: "A boxplot can quickly display central spread and identify values beyond the usual IQR fences for further investigation."
            },
            [
                "A percentile is not the percentage score earned on a test.",
                "IQR describes the middle 50% of observations.",
                "Outlier identification does not automatically justify deleting a value."
            ],
            [
                "Q1 = 25%.",
                "Q2 = median.",
                "Q3 = 75%.",
                "IQR = middle 50%."
            ],
            [
                "Percentiles describe relative position.",
                "Q2 is the median.",
                "IQR equals Q3 minus Q1.",
                "IQR is resistant to outliers.",
                "The 1.5 × IQR rule flags potential outliers.",
                "Boxplots summarize quartiles and spread."
            ],
            [
                {
                    id: "quart1",
                    type: "numeric",
                    q: "If Q1 = 14 and Q3 = 26, what is the IQR?",
                    answer: 12,
                    tolerance: 0,
                    unit: "",
                    explanation: "IQR = 26 − 14 = 12."
                },
                {
                    id: "quart2",
                    type: "mcq",
                    q: "Which quartile is identical to the median?",
                    choices: [
                        "Q2",
                        "Q1",
                        "Q3",
                        "None"
                    ],
                    answer: 0,
                    explanation: "Q2 is the 50th percentile, which is the median."
                }
            ]
        ),

        // ====================================================================
        // MODULE 2
        // ====================================================================

        topic(
            "probability-basics",
            8,
            2,
            "Probability Basics, Complements & Addition Rules",
            "Learn probability notation, complements, mutually exclusive events and the addition rule.",
            [
                "Interpret probability values.",
                "Calculate complements.",
                "Use the addition rule.",
                "Differentiate mutually exclusive events.",
                "Interpret probability in healthcare contexts."
            ],
            [
                ["Probability", "Long-run relative likelihood of an event, ranging from 0 to 1."],
                ["Event", "Outcome or set of outcomes of interest."],
                ["Complement", "Event consisting of outcomes not in the original event."],
                ["Mutually exclusive events", "Events that cannot occur at the same time."],
                ["Addition rule", "Rule for calculating probability of A or B."]
            ],
            [
                "P(not A) = 1 − P(A)",
                "P(A or B) = P(A) + P(B) − P(A and B)",
                "If mutually exclusive: P(A or B) = P(A) + P(B)"
            ],
            [
                section(
                    "PROBABILITY SCALE",
                    "From Impossible to Certain",
                    [
                        "Probability ranges from 0 to 1.",
                        "A probability of 0 means an event is impossible under the model.",
                        "A probability of 1 means the event is certain."
                    ]
                ),
                section(
                    "COMPLEMENTS",
                    "Everything That Does Not Happen",
                    [
                        "The complement of event A includes every outcome in which A does not occur.",
                        "Because an event and its complement together cover all possibilities, their probabilities sum to 1.",
                        "If infection risk is 0.12, the probability of no infection is 0.88."
                    ]
                ),
                section(
                    "ADDITION RULE",
                    "Probability of A or B",
                    [
                        "To calculate the probability of A or B, add the individual probabilities and subtract their overlap.",
                        "Subtracting the overlap prevents double counting outcomes belonging to both events."
                    ]
                ),
                section(
                    "MUTUALLY EXCLUSIVE EVENTS",
                    "No Overlap",
                    [
                        "Mutually exclusive events cannot occur together.",
                        "For one patient, blood type A and blood type B are mutually exclusive classifications under the standard ABO phenotype categories.",
                        "If events are mutually exclusive, P(A and B) = 0."
                    ]
                ),
                section(
                    "HEALTHCARE INTERPRETATION",
                    "Probability Is Long-Run Uncertainty",
                    [
                        "A 10% event probability does not mean every tenth patient will experience the event exactly.",
                        "Probability describes long-run uncertainty across repeated comparable situations.",
                        "Individual outcomes remain uncertain."
                    ]
                )
            ],
            [
                worked(
                    "Complement",
                    "The probability of a medication adverse effect is 0.08. What is the probability of no adverse effect?",
                    [
                        "Use P(not A) = 1 − P(A).",
                        "1 − 0.08 = 0.92."
                    ],
                    "0.92 or 92%"
                ),
                worked(
                    "Addition for Mutually Exclusive Events",
                    "P(blood type A) = 0.40 and P(blood type B) = 0.11. Assuming these categories are mutually exclusive, find P(A or B).",
                    [
                        "Mutually exclusive means no overlap.",
                        "Add: 0.40 + 0.11 = 0.51."
                    ],
                    "0.51"
                )
            ],
            [
                practice(
                    "If the probability of readmission is 0.18, what is the probability of no readmission?",
                    "0.82.",
                    [
                        "1 − 0.18 = 0.82."
                    ]
                ),
                practice(
                    "If mutually exclusive events have probabilities 0.25 and 0.30, what is P(A or B)?",
                    "0.55.",
                    [
                        "Because there is no overlap, simply add.",
                        "0.25 + 0.30 = 0.55."
                    ]
                )
            ],
            {
                title: "Readmission Risk",
                scenario: "A predictive model estimates a 15% 30-day readmission risk.",
                connection: "The complement is an estimated 85% probability of no 30-day readmission under the model."
            },
            [
                "Probabilities cannot be negative or exceed 1.",
                "Do not add probabilities without considering overlap.",
                "Mutually exclusive and independent are different concepts."
            ],
            [
                "COMPLEMENT = 1 minus.",
                "OR = add, then subtract overlap."
            ],
            [
                "Probability ranges from 0 to 1.",
                "Complements sum to 1.",
                "The addition rule handles A or B.",
                "Mutually exclusive events have no overlap.",
                "Probability represents uncertainty rather than certainty for one individual."
            ],
            [
                {
                    id: "prob1",
                    type: "numeric",
                    q: "If P(A) = 0.27, what is P(not A)?",
                    answer: 0.73,
                    tolerance: 0.0001,
                    unit: "",
                    explanation: "1 − 0.27 = 0.73."
                },
                {
                    id: "prob2",
                    type: "numeric",
                    q: "Two mutually exclusive events have probabilities 0.20 and 0.35. What is P(A or B)?",
                    answer: 0.55,
                    tolerance: 0.0001,
                    unit: "",
                    explanation: "Because the events cannot overlap, 0.20 + 0.35 = 0.55."
                }
            ]
        ),

        topic(
            "conditional-independence",
            9,
            2,
            "Conditional Probability, Independence & Multiplication",
            "Learn conditional probability, independent events and multiplication rules.",
            [
                "Define conditional probability.",
                "Determine whether events are independent.",
                "Use the multiplication rule for independent events.",
                "Interpret conditional probability tables.",
                "Differentiate independent and mutually exclusive events."
            ],
            [
                ["Conditional probability", "Probability of an event given that another event has occurred."],
                ["Independent events", "Events for which occurrence of one does not change the probability of the other."],
                ["Dependent events", "Events where one event changes the probability of the other."],
                ["Multiplication rule", "Rule used to calculate joint probabilities."],
                ["Joint probability", "Probability that two events occur together."]
            ],
            [
                "P(A and B) = P(A) × P(B|A)",
                "If independent: P(A and B) = P(A) × P(B)"
            ],
            [
                section(
                    "CONDITIONAL PROBABILITY",
                    "Probability Changes When New Information Is Known",
                    [
                        "Conditional probability asks how likely event A is when event B is already known.",
                        "For example, the probability of pneumonia among ventilated patients may differ from the probability among all hospitalized patients.",
                        "The notation P(A|B) means probability of A given B."
                    ]
                ),
                section(
                    "INDEPENDENCE",
                    "One Event Does Not Change the Other",
                    [
                        "Events A and B are independent when knowing B occurred does not change the probability of A.",
                        "Mathematically, P(A|B) = P(A) for independent events.",
                        "Independence must be justified by the probability structure, not assumed."
                    ]
                ),
                section(
                    "MULTIPLICATION RULE",
                    "Probability of A and B",
                    [
                        "For dependent events, multiply P(A) by P(B|A).",
                        "For independent events, P(B|A) equals P(B), so simple multiplication can be used.",
                        "This is useful for repeated independent events."
                    ]
                ),
                section(
                    "INDEPENDENT VS MUTUALLY EXCLUSIVE",
                    "These Concepts Are Almost Opposites",
                    [
                        "Mutually exclusive events cannot occur together.",
                        "Independent events can occur together, but one does not alter the probability of the other.",
                        "Two events with positive probabilities generally cannot be both mutually exclusive and independent."
                    ]
                )
            ],
            [
                worked(
                    "Two Independent Events",
                    "The probability a device fails during a shift is 0.05. If two independent devices are observed, what is the probability both fail?",
                    [
                        "For independent events, multiply.",
                        "0.05 × 0.05 = 0.0025."
                    ],
                    "0.0025 or 0.25%"
                )
            ],
            [
                practice(
                    "If P(A) = 0.6 and P(B) = 0.4 and the events are independent, what is P(A and B)?",
                    "0.24.",
                    [
                        "Multiply probabilities.",
                        "0.6 × 0.4 = 0.24."
                    ]
                ),
                practice(
                    "If an event changes the probability of another event, are the events independent?",
                    "No.",
                    [
                        "Independence means one event does not change the probability of the other."
                    ]
                )
            ],
            {
                title: "Hospital Exposure",
                scenario: "The probability of infection is evaluated specifically among patients with central lines.",
                connection: "This is conditional probability because infection probability is being considered given central-line exposure."
            },
            [
                "Mutually exclusive does not mean independent.",
                "Use multiplication for AND, but the conditional probability may be required.",
                "Do not assume independence merely because events look unrelated."
            ],
            [
                "GIVEN = conditional.",
                "INDEPENDENT = no probability change.",
                "AND = multiply."
            ],
            [
                "Conditional probability uses additional information.",
                "Independent events do not change one another's probabilities.",
                "Joint probabilities describe events occurring together.",
                "The multiplication rule calculates A and B.",
                "Independent and mutually exclusive are different concepts."
            ],
            [
                {
                    id: "cond1",
                    type: "numeric",
                    q: "If two independent events have probabilities 0.3 and 0.5, what is the probability both occur?",
                    answer: 0.15,
                    tolerance: 0.0001,
                    unit: "",
                    explanation: "0.3 × 0.5 = 0.15."
                },
                {
                    id: "cond2",
                    type: "mcq",
                    q: "If knowing that B occurred changes the probability of A, then A and B are:",
                    choices: [
                        "Dependent",
                        "Independent",
                        "Mutually exclusive automatically",
                        "Impossible"
                    ],
                    answer: 0,
                    explanation: "Dependence means occurrence of one event changes the probability of another."
                }
            ]
        ),

        topic(
            "binomial",
            10,
            2,
            "Binomial Probability",
            "Learn the assumptions of the binomial distribution and calculate probabilities for repeated yes/no outcomes.",
            [
                "Identify binomial conditions.",
                "Define n, x, p and q.",
                "Calculate simple binomial probabilities.",
                "Calculate binomial mean.",
                "Apply binomial models to healthcare events."
            ],
            [
                ["Binomial experiment", "Fixed number of independent trials with two outcomes and constant success probability."],
                ["Trial", "One repetition of an experiment."],
                ["Success", "Outcome designated as the event of interest."],
                ["Failure", "The alternative outcome."],
                ["n", "Number of trials."],
                ["x", "Number of successes."],
                ["p", "Probability of success."],
                ["q", "Probability of failure, equal to 1 − p."]
            ],
            [
                "P(X=x) = C(n,x)pˣqⁿ⁻ˣ",
                "Binomial mean = np",
                "q = 1 − p"
            ],
            [
                section(
                    "BINOMIAL CONDITIONS",
                    "Four Requirements",
                    [
                        "A binomial model requires a fixed number of trials.",
                        "Each trial must have two outcomes, often called success and failure.",
                        "Trials should be independent, and the probability of success should remain constant."
                    ]
                ),
                section(
                    "SUCCESS IS JUST A LABEL",
                    "Success Does Not Mean Something Good",
                    [
                        "In statistics, success means the outcome being counted.",
                        "If studying medication errors, an error may be labeled a statistical success simply because it is the event of interest.",
                        "The terminology is mathematical, not moral."
                    ]
                ),
                section(
                    "COMBINATIONS",
                    "Successes Can Occur in Different Orders",
                    [
                        "The combination term C(n,x) counts the number of ways x successes can occur among n trials.",
                        "This is necessary because the same number of successes can happen in many sequences."
                    ]
                ),
                section(
                    "EXPECTED VALUE",
                    "Average Number of Successes",
                    [
                        "The binomial mean is np.",
                        "If 100 patients each have a 0.20 event probability, the expected number of events is 20.",
                        "Expected value is a long-run average and does not guarantee exactly 20 events in one sample."
                    ]
                )
            ],
            [
                worked(
                    "Exactly Two Successes",
                    "Suppose n = 3 and p = 0.5. Find the probability of exactly 2 successes.",
                    [
                        "q = 1 − 0.5 = 0.5.",
                        "C(3,2) = 3.",
                        "P(X=2) = 3(0.5²)(0.5¹).",
                        "P = 3 × 0.25 × 0.5 = 0.375."
                    ],
                    "0.375"
                )
            ],
            [
                practice(
                    "For a binomial experiment with n = 20 and p = 0.30, what is the expected number of successes?",
                    "6.",
                    [
                        "Mean = np.",
                        "20 × 0.30 = 6."
                    ]
                ),
                practice(
                    "If p = 0.18, what is q?",
                    "0.82.",
                    [
                        "q = 1 − p.",
                        "1 − 0.18 = 0.82."
                    ]
                )
            ],
            {
                title: "Medication Reaction",
                scenario: "Each independently treated patient has a 10% probability of developing a specific reaction.",
                connection: "If the probability is stable and each patient represents an independent trial with reaction/no reaction, a binomial model may be appropriate."
            },
            [
                "Binomial trials must have a constant probability of success.",
                "Success does not mean a desirable outcome.",
                "Expected value is not a guarantee."
            ],
            [
                "BINOMIAL = fixed n, two outcomes, independent, same p.",
                "MEAN = np."
            ],
            [
                "Binomial models use repeated two-outcome trials.",
                "p is success probability.",
                "q equals 1 minus p.",
                "The binomial mean is np.",
                "Combinations count possible arrangements."
            ],
            [
                {
                    id: "bin1",
                    type: "numeric",
                    q: "For n = 50 and p = 0.12, what is the expected number of successes?",
                    answer: 6,
                    tolerance: 0.001,
                    unit: "",
                    explanation: "np = 50 × 0.12 = 6."
                },
                {
                    id: "bin2",
                    type: "numeric",
                    q: "If p = 0.35, what is q?",
                    answer: 0.65,
                    tolerance: 0.0001,
                    unit: "",
                    explanation: "q = 1 − 0.35 = 0.65."
                }
            ]
        ),

        // ====================================================================
        // MODULE 3
        // ====================================================================

        topic(
            "normal-distribution",
            11,
            3,
            "Normal Distribution & the Empirical Rule",
            "Master the bell-shaped normal distribution and the 68-95-99.7 empirical rule.",
            [
                "Describe the normal distribution.",
                "Explain symmetry.",
                "Use the empirical rule.",
                "Interpret standard deviations from the mean.",
                "Recognize when the empirical rule applies."
            ],
            [
                ["Normal distribution", "Symmetric bell-shaped continuous probability distribution."],
                ["Empirical rule", "Approximately 68%, 95% and 99.7% of normal observations fall within 1, 2 and 3 standard deviations of the mean."],
                ["Symmetry", "Left and right halves mirror one another."],
                ["Bell curve", "Common visual description of the normal distribution."]
            ],
            [
                "Mean ± 1 SD ≈ 68%",
                "Mean ± 2 SD ≈ 95%",
                "Mean ± 3 SD ≈ 99.7%"
            ],
            [
                section(
                    "SHAPE",
                    "The Bell Curve",
                    [
                        "A normal distribution is symmetric and unimodal.",
                        "The mean, median and mode are equal in a perfect normal distribution.",
                        "Many biological measurements are approximately normal under appropriate conditions."
                    ]
                ),
                section(
                    "AREA",
                    "Probability Is Represented by Area",
                    [
                        "The entire area under a probability density curve equals 1.",
                        "Because the normal distribution is symmetric, half of the area lies below the mean and half above it.",
                        "Areas correspond to probabilities or proportions."
                    ]
                ),
                section(
                    "68-95-99.7 RULE",
                    "A Fast Approximation",
                    [
                        "About 68% of observations lie within one standard deviation of the mean.",
                        "About 95% lie within two standard deviations.",
                        "About 99.7% lie within three standard deviations."
                    ]
                ),
                section(
                    "TAILS",
                    "Extreme Values Become Less Common",
                    [
                        "Values farther from the mean lie in the thinner tails.",
                        "Only about 5% of a normal distribution lies outside two standard deviations.",
                        "Approximately 2.5% lies in each tail beyond ±2 SD."
                    ]
                ),
                section(
                    "LIMITATIONS",
                    "Not Every Variable Is Normal",
                    [
                        "Income, hospital stay and some laboratory values can be strongly skewed.",
                        "The empirical rule should not be applied automatically to obviously non-normal data.",
                        "Graphing the distribution helps assess shape."
                    ]
                )
            ],
            [
                worked(
                    "Empirical Rule",
                    "A normal distribution has mean 100 and SD 15. Approximately what percentage lies between 70 and 130?",
                    [
                        "70 is 2 SD below 100 because 100 − 2(15) = 70.",
                        "130 is 2 SD above 100.",
                        "Approximately 95% lies within ±2 SD."
                    ],
                    "Approximately 95%"
                )
            ],
            [
                practice(
                    "A normal variable has mean 50 and SD 5. Approximately what percentage lies between 45 and 55?",
                    "68%.",
                    [
                        "45 and 55 are one SD below and above the mean.",
                        "The empirical rule gives approximately 68%."
                    ]
                ),
                practice(
                    "Approximately what percentage of a normal distribution lies within 3 SD of the mean?",
                    "99.7%.",
                    [
                        "Use the 68-95-99.7 rule."
                    ]
                )
            ],
            {
                title: "Clinical Reference Distribution",
                scenario: "A laboratory analyte is approximately normally distributed in healthy adults.",
                connection: "The mean and standard deviation can describe where most healthy observations fall and identify unusually extreme values."
            },
            [
                "The empirical rule applies specifically to approximately normal distributions.",
                "About 95% lies within ±2 SD, not exactly 95% in every real dataset.",
                "Symmetry means half the probability is on each side of the mean."
            ],
            [
                "1 SD = 68.",
                "2 SD = 95.",
                "3 SD = 99.7."
            ],
            [
                "Normal distributions are symmetric.",
                "Mean, median and mode coincide in a perfect normal curve.",
                "Area represents probability.",
                "68% lies within 1 SD.",
                "95% lies within 2 SD.",
                "99.7% lies within 3 SD."
            ],
            [
                {
                    id: "normal1",
                    type: "mcq",
                    q: "Approximately what percentage of a normal distribution lies within two standard deviations of the mean?",
                    choices: [
                        "95%",
                        "68%",
                        "50%",
                        "99.99%"
                    ],
                    answer: 0,
                    explanation: "The empirical rule gives approximately 95% within ±2 standard deviations."
                },
                {
                    id: "normal2",
                    type: "mcq",
                    q: "In a perfectly normal distribution, which relationship is expected?",
                    choices: [
                        "Mean = median = mode",
                        "Mean is always greater than median",
                        "Median is always zero",
                        "Mode cannot be defined"
                    ],
                    answer: 0,
                    explanation: "A normal distribution is symmetric and unimodal, placing all three measures at the center."
                }
            ]
        ),

        topic(
            "z-scores",
            12,
            3,
            "Z-Scores & Standard Normal Distribution",
            "Learn to standardize observations, calculate z-scores and compare values measured on different scales.",
            [
                "Define z-score.",
                "Calculate a z-score.",
                "Interpret positive and negative z-scores.",
                "Compare observations from different distributions.",
                "Identify unusually extreme z-scores."
            ],
            [
                ["Z-score", "Number of standard deviations an observation lies above or below the mean."],
                ["Standard normal distribution", "Normal distribution with mean 0 and standard deviation 1."],
                ["Standardization", "Transformation of values to a common scale using z-scores."]
            ],
            [
                "z = (x − μ) ÷ σ",
                "Sample-style standardization: z = (x − x̄) ÷ s"
            ],
            [
                section(
                    "MEANING OF Z",
                    "Distance From the Mean in Standard-Deviation Units",
                    [
                        "A z-score of 0 means the observation equals the mean.",
                        "A positive z-score means the observation lies above the mean.",
                        "A negative z-score means the observation lies below the mean."
                    ]
                ),
                section(
                    "CALCULATION",
                    "Subtract, Then Divide",
                    [
                        "Subtract the mean from the observation.",
                        "Divide that difference by the standard deviation.",
                        "The result has no measurement units because both numerator and denominator use the same units."
                    ]
                ),
                section(
                    "COMPARISON",
                    "Standardization Allows Apples-to-Apples Comparison",
                    [
                        "Suppose a person scores 90 on one test and 75 on another.",
                        "Raw scores cannot determine which performance was more unusual unless the distributions are known.",
                        "Z-scores express relative standing on a common scale."
                    ]
                ),
                section(
                    "EXTREME VALUES",
                    "Large Absolute Z-Scores Are Unusual",
                    [
                        "Values with z-scores near zero are close to average.",
                        "A z-score near ±2 is relatively unusual in a normal distribution.",
                        "A z-score near ±3 is very unusual."
                    ]
                )
            ],
            [
                worked(
                    "Calculate a Z-Score",
                    "A test has mean 70 and SD 10. A student scores 85. Find z.",
                    [
                        "Subtract mean: 85 − 70 = 15.",
                        "Divide by SD: 15 ÷ 10 = 1.5."
                    ],
                    "z = 1.5"
                )
            ],
            [
                practice(
                    "A variable has mean 100 and SD 20. What is the z-score for x = 130?",
                    "1.5.",
                    [
                        "130 − 100 = 30.",
                        "30 ÷ 20 = 1.5."
                    ]
                ),
                practice(
                    "A patient's value has z = −2. What does this mean?",
                    "The value is 2 standard deviations below the mean.",
                    [
                        "Negative means below the mean.",
                        "Absolute value 2 means two standard deviations away."
                    ]
                )
            ],
            {
                title: "Standardized Growth Measurement",
                scenario: "A child's measurement is reported as z = −1.8 relative to a reference population.",
                connection: "The value is 1.8 standard deviations below the reference mean."
            },
            [
                "The sign indicates direction, not importance.",
                "Z-scores have no physical units.",
                "A larger raw value does not necessarily have a larger z-score across different scales."
            ],
            [
                "Z = how many SDs away.",
                "Positive = above.",
                "Negative = below."
            ],
            [
                "Z-scores measure distance from the mean.",
                "z = 0 is the mean.",
                "Positive z is above the mean.",
                "Negative z is below the mean.",
                "Standardization allows comparison across scales."
            ],
            [
                {
                    id: "z1",
                    type: "numeric",
                    q: "A distribution has mean 50 and SD 8. What is the z-score for x = 66?",
                    answer: 2,
                    tolerance: 0.001,
                    unit: "",
                    explanation: "(66 − 50) ÷ 8 = 16 ÷ 8 = 2."
                },
                {
                    id: "z2",
                    type: "mcq",
                    q: "A z-score of −1.5 means the observation is:",
                    choices: [
                        "1.5 standard deviations below the mean",
                        "1.5 standard deviations above the mean",
                        "Equal to the mean",
                        "1.5 units above zero regardless of scale"
                    ],
                    answer: 0,
                    explanation: "Negative z-scores lie below the mean."
                }
            ],
            ["Calculation", "High Yield", "Theory"]
        ),

        topic(
            "sampling-distributions",
            13,
            3,
            "Sampling Distributions & the Central Limit Theorem",
            "Understand why sample means vary and how the central limit theorem supports statistical inference.",
            [
                "Define a sampling distribution.",
                "Explain sampling variability.",
                "State the central limit theorem conceptually.",
                "Explain how sample size affects the sampling distribution.",
                "Differentiate population SD and standard error."
            ],
            [
                ["Sampling distribution", "Probability distribution of a statistic across repeated samples."],
                ["Sampling variability", "Natural variation in statistics from sample to sample."],
                ["Central limit theorem", "Principle that the sampling distribution of the mean becomes approximately normal as sample size grows under broad conditions."],
                ["Standard error", "Standard deviation of a sampling distribution."]
            ],
            [
                "SE of mean = σ ÷ √n",
                "Estimated SE = s ÷ √n"
            ],
            [
                section(
                    "REPEATED SAMPLES",
                    "Different Samples Give Different Means",
                    [
                        "If many random samples are drawn from the same population, their sample means will not be identical.",
                        "This natural variation is sampling variability.",
                        "Inference works by modeling how much sample statistics would vary across repeated samples."
                    ]
                ),
                section(
                    "SAMPLING DISTRIBUTION",
                    "A Distribution of Statistics",
                    [
                        "A sampling distribution is not the same as the distribution of individual patient measurements.",
                        "Instead, imagine repeatedly calculating a sample mean from many samples.",
                        "Those sample means form their own distribution."
                    ]
                ),
                section(
                    "CENTRAL LIMIT THEOREM",
                    "Sample Means Become Predictable",
                    [
                        "Under broad conditions, the sampling distribution of the sample mean becomes increasingly normal as sample size increases.",
                        "This occurs even when the original population is not perfectly normal.",
                        "The theorem is one of the foundations of confidence intervals and hypothesis tests."
                    ]
                ),
                section(
                    "LARGER SAMPLES",
                    "Less Sampling Variability",
                    [
                        "The standard error of the mean decreases as sample size increases.",
                        "Because n is inside a square root, quadrupling sample size cuts standard error approximately in half.",
                        "Larger samples therefore estimate population means more precisely."
                    ]
                )
            ],
            [
                worked(
                    "Standard Error",
                    "Population SD is 20 and n = 100. Find the standard error.",
                    [
                        "SE = σ ÷ √n.",
                        "√100 = 10.",
                        "20 ÷ 10 = 2."
                    ],
                    "2"
                )
            ],
            [
                practice(
                    "If SD = 12 and n = 36, what is the estimated standard error?",
                    "2.",
                    [
                        "√36 = 6.",
                        "12 ÷ 6 = 2."
                    ]
                ),
                practice(
                    "If sample size increases, what generally happens to standard error?",
                    "It decreases.",
                    [
                        "SE divides by √n.",
                        "Larger n increases the denominator."
                    ]
                )
            ],
            {
                title: "Repeated Blood Pressure Samples",
                scenario: "Different random samples of 100 patients produce slightly different mean blood pressures.",
                connection: "That variation is sampling variability, and its magnitude is quantified by the standard error."
            },
            [
                "Standard deviation describes individual variation; standard error describes statistic-to-statistic variation.",
                "A larger sample reduces standard error.",
                "The sampling distribution is a distribution of sample statistics."
            ],
            [
                "SD = spread of people.",
                "SE = spread of sample means.",
                "Bigger n = smaller SE."
            ],
            [
                "Sample statistics vary naturally.",
                "Sampling distributions describe that variation.",
                "The central limit theorem supports normal-based inference.",
                "Standard error measures sampling variability.",
                "Larger samples give smaller standard errors."
            ],
            [
                {
                    id: "clt1",
                    type: "numeric",
                    q: "If sample SD = 15 and n = 25, what is the estimated standard error of the mean?",
                    answer: 3,
                    tolerance: 0.001,
                    unit: "",
                    explanation: "15 ÷ √25 = 15 ÷ 5 = 3."
                },
                {
                    id: "clt2",
                    type: "mcq",
                    q: "Which statement about standard error is correct?",
                    choices: [
                        "It generally decreases as sample size increases.",
                        "It always equals the standard deviation.",
                        "It increases whenever n increases.",
                        "It measures category labels."
                    ],
                    answer: 0,
                    explanation: "Because SE is divided by √n, increasing n decreases standard error."
                }
            ]
        ),

        // ====================================================================
        // MODULE 4
        // ====================================================================

        topic(
            "confidence-interval-concept",
            14,
            4,
            "Confidence Intervals: Concepts & Margin of Error",
            "Understand interval estimation, confidence level, critical values and margin of error.",
            [
                "Define a confidence interval.",
                "Explain confidence level.",
                "Define margin of error.",
                "Explain how sample size affects interval width.",
                "Explain how confidence level affects interval width."
            ],
            [
                ["Confidence interval", "Range of plausible values used to estimate an unknown population parameter."],
                ["Confidence level", "Long-run percentage of similarly constructed intervals that capture the true parameter."],
                ["Margin of error", "Distance from the point estimate to either confidence-limit boundary."],
                ["Point estimate", "Single sample statistic used to estimate a population parameter."],
                ["Critical value", "Multiplier determined by confidence level and sampling distribution."]
            ],
            [
                "Confidence interval = point estimate ± margin of error",
                "Margin of error = critical value × standard error"
            ],
            [
                section(
                    "POINT VS INTERVAL ESTIMATION",
                    "One Number Versus a Range",
                    [
                        "A sample mean is a point estimate of the population mean.",
                        "Because samples vary, a single number hides uncertainty.",
                        "A confidence interval combines the point estimate with a margin of error."
                    ]
                ),
                section(
                    "95% CONFIDENCE",
                    "A Long-Run Procedure",
                    [
                        "A 95% confidence procedure is designed so that approximately 95% of intervals created from repeated random samples capture the true population parameter.",
                        "After one interval is calculated, the parameter is fixed rather than randomly moving.",
                        "Informal language often says we are 95% confident the interval captures the parameter."
                    ]
                ),
                section(
                    "MARGIN OF ERROR",
                    "Precision Around the Estimate",
                    [
                        "Margin of error equals the critical value multiplied by standard error.",
                        "Smaller standard error produces a narrower interval.",
                        "Greater confidence requires a larger critical value and therefore a wider interval."
                    ]
                ),
                section(
                    "SAMPLE SIZE",
                    "More Information Narrows the Interval",
                    [
                        "Larger samples reduce standard error.",
                        "That reduces margin of error and narrows the interval.",
                        "Precision improves, though very large samples may be expensive."
                    ]
                )
            ],
            [
                worked(
                    "Construct a Simple Interval",
                    "A sample estimate is 50 with margin of error 4. Construct the confidence interval.",
                    [
                        "Lower limit = 50 − 4 = 46.",
                        "Upper limit = 50 + 4 = 54."
                    ],
                    "46 to 54"
                )
            ],
            [
                practice(
                    "A sample estimate is 82 with margin of error 6. What is the interval?",
                    "76 to 88.",
                    [
                        "82 − 6 = 76.",
                        "82 + 6 = 88."
                    ]
                ),
                practice(
                    "If confidence level increases from 90% to 99% with everything else unchanged, what happens to interval width?",
                    "It becomes wider.",
                    [
                        "Higher confidence requires a larger critical value.",
                        "Larger critical value increases margin of error."
                    ]
                )
            ],
            {
                title: "Average Recovery Time",
                scenario: "A study estimates mean recovery time as 12 days with a 95% confidence interval from 10 to 14 days.",
                connection: "The interval communicates both the estimated center and the uncertainty around that estimate."
            },
            [
                "Higher confidence usually means a wider interval.",
                "Larger sample size usually means a narrower interval.",
                "A confidence interval does not mean 95% of individual observations lie inside it."
            ],
            [
                "CI = estimate ± error.",
                "More confidence = wider.",
                "More sample = narrower."
            ],
            [
                "Confidence intervals estimate parameters.",
                "Margin of error determines half-width.",
                "Larger samples improve precision.",
                "Higher confidence widens intervals.",
                "Confidence level refers to long-run procedure performance."
            ],
            [
                {
                    id: "cicon1",
                    type: "numeric",
                    q: "A point estimate is 120 with margin of error 8. What is the lower confidence limit?",
                    answer: 112,
                    tolerance: 0,
                    unit: "",
                    explanation: "120 − 8 = 112."
                },
                {
                    id: "cicon2",
                    type: "mcq",
                    q: "What generally happens to a confidence interval when sample size increases while other factors stay constant?",
                    choices: [
                        "It becomes narrower.",
                        "It becomes wider.",
                        "The confidence level becomes zero.",
                        "The sample mean must increase."
                    ],
                    answer: 0,
                    explanation: "Larger samples reduce standard error and usually narrow the interval."
                }
            ]
        ),

        topic(
            "ci-mean",
            15,
            4,
            "Confidence Interval for a Mean",
            "Calculate and interpret confidence intervals for population means using standard error and critical values.",
            [
                "Calculate standard error of a mean.",
                "Construct a confidence interval.",
                "Interpret a mean confidence interval.",
                "Explain when t critical values are used.",
                "Explain how variability affects interval width."
            ],
            [
                ["Mean confidence interval", "Interval estimate for a population mean."],
                ["t distribution", "Symmetric distribution used when population SD is unknown and estimated from the sample."],
                ["Degrees of freedom", "Quantity related to independent information, commonly n − 1 for a one-sample t procedure."],
                ["Critical t value", "Multiplier determined by confidence level and degrees of freedom."]
            ],
            [
                "SE = s ÷ √n",
                "CI for mean = x̄ ± t* × SE"
            ],
            [
                section(
                    "WHY T IS COMMON",
                    "Population Standard Deviation Is Usually Unknown",
                    [
                        "In real studies, the population standard deviation is rarely known.",
                        "Researchers estimate variability using the sample standard deviation.",
                        "This additional uncertainty is represented by the t distribution."
                    ]
                ),
                section(
                    "STANDARD ERROR",
                    "First Calculate Precision",
                    [
                        "Standard error equals sample SD divided by the square root of sample size.",
                        "Smaller standard error means the sample mean is estimated more precisely.",
                        "SE decreases as n increases."
                    ]
                ),
                section(
                    "MARGIN OF ERROR",
                    "Multiply by the Critical Value",
                    [
                        "The margin of error is t* multiplied by SE.",
                        "The critical t value depends on confidence level and degrees of freedom.",
                        "For large samples, t values approach corresponding normal z values."
                    ]
                ),
                section(
                    "INTERPRETATION",
                    "Estimate the Population Mean",
                    [
                        "A confidence interval describes plausible values for the unknown population mean.",
                        "It does not describe the range containing most individual patients.",
                        "The interval is about uncertainty in the mean."
                    ]
                )
            ],
            [
                worked(
                    "Mean Confidence Interval",
                    "A sample mean is 100, s = 15, n = 25 and t* = 2.064. Construct the interval.",
                    [
                        "SE = 15 ÷ √25 = 15 ÷ 5 = 3.",
                        "Margin of error = 2.064 × 3 = 6.192.",
                        "Lower = 100 − 6.192 = 93.808.",
                        "Upper = 100 + 6.192 = 106.192."
                    ],
                    "Approximately 93.81 to 106.19"
                )
            ],
            [
                practice(
                    "A sample has mean 50, s = 10, n = 25. What is the standard error?",
                    "2.",
                    [
                        "√25 = 5.",
                        "10 ÷ 5 = 2."
                    ]
                ),
                practice(
                    "If the point estimate is 50 and the margin of error is 4.2, what is the confidence interval?",
                    "45.8 to 54.2.",
                    [
                        "Subtract 4.2 from 50.",
                        "Add 4.2 to 50."
                    ]
                )
            ],
            {
                title: "Mean Systolic Blood Pressure",
                scenario: "Researchers report a 95% CI for mean systolic blood pressure of 118 to 124 mmHg.",
                connection: "The interval estimates the population mean blood pressure, not the range containing 95% of individual blood pressures."
            },
            [
                "A confidence interval for the mean is not a prediction interval for individual values.",
                "Standard error and standard deviation are not interchangeable.",
                "Degrees of freedom for a one-sample t interval are usually n − 1."
            ],
            [
                "MEAN CI = mean ± t × SE.",
                "SE = s over root n."
            ],
            [
                "Mean confidence intervals estimate population means.",
                "Sample SD is commonly used.",
                "The t distribution accounts for estimated variability.",
                "SE decreases as n increases.",
                "The interval reflects uncertainty in the mean."
            ],
            [
                {
                    id: "cimean1",
                    type: "numeric",
                    q: "A sample has s = 18 and n = 36. What is the standard error?",
                    answer: 3,
                    tolerance: 0.001,
                    unit: "",
                    explanation: "18 ÷ √36 = 18 ÷ 6 = 3."
                },
                {
                    id: "cimean2",
                    type: "mcq",
                    q: "A 95% confidence interval for a population mean primarily describes:",
                    choices: [
                        "Uncertainty about the population mean",
                        "The range containing exactly 95% of patients",
                        "The maximum possible observation",
                        "The median only"
                    ],
                    answer: 0,
                    explanation: "The confidence interval estimates the unknown population mean."
                }
            ]
        ),

        topic(
            "ci-proportion",
            16,
            4,
            "Confidence Interval for a Proportion",
            "Estimate population percentages and proportions such as infection, vaccination and readmission rates.",
            [
                "Calculate a sample proportion.",
                "Calculate proportion standard error.",
                "Construct an approximate confidence interval.",
                "Interpret a confidence interval for a population proportion.",
                "Recognize factors affecting precision."
            ],
            [
                ["Sample proportion", "Fraction of sampled observations with the characteristic of interest."],
                ["Population proportion", "True fraction of the population with the characteristic."],
                ["Proportion standard error", "Estimated sampling variability of a sample proportion."]
            ],
            [
                "p̂ = x ÷ n",
                "SE(p̂) = √[p̂(1 − p̂) ÷ n]",
                "Approximate CI = p̂ ± z* × SE"
            ],
            [
                section(
                    "SAMPLE PROPORTION",
                    "Count Successes and Divide by Total",
                    [
                        "A sample proportion is calculated by dividing the number with the characteristic by the total sample size.",
                        "If 80 of 200 patients are vaccinated, p-hat is 0.40.",
                        "Percentages and proportions represent the same information on different scales."
                    ]
                ),
                section(
                    "STANDARD ERROR",
                    "Precision Depends on p and n",
                    [
                        "The estimated standard error depends on both the sample proportion and sample size.",
                        "Larger samples produce smaller standard errors.",
                        "Proportions near 0.5 tend to have greater sampling variability than equally sized samples with proportions near 0 or 1."
                    ]
                ),
                section(
                    "INTERVAL ESTIMATION",
                    "Estimate the True Population Percentage",
                    [
                        "The interval uses the sample proportion as the center.",
                        "A critical z value is commonly used for large-sample intervals.",
                        "For a 95% confidence interval, z* is approximately 1.96."
                    ]
                ),
                section(
                    "INTERPRETATION",
                    "Convert to Percentages When Helpful",
                    [
                        "An interval from 0.22 to 0.30 corresponds to 22% to 30%.",
                        "The interval estimates a population proportion, such as prevalence or vaccination coverage.",
                        "Precision improves with larger sample size."
                    ]
                )
            ],
            [
                worked(
                    "Sample Proportion",
                    "48 of 200 patients are readmitted. Find p-hat.",
                    [
                        "p̂ = 48 ÷ 200.",
                        "p̂ = 0.24.",
                        "As a percentage, 24%."
                    ],
                    "0.24 or 24%"
                )
            ],
            [
                practice(
                    "30 of 120 patients test positive. What is the sample proportion?",
                    "0.25.",
                    [
                        "30 ÷ 120 = 0.25."
                    ]
                ),
                practice(
                    "A confidence interval for a proportion is 0.31 to 0.39. Express it as percentages.",
                    "31% to 39%.",
                    [
                        "Multiply each endpoint by 100."
                    ]
                )
            ],
            {
                title: "Vaccination Coverage",
                scenario: "A sample estimates vaccination coverage at 72%, with a 95% CI from 68% to 76%.",
                connection: "The interval estimates the likely range for the population vaccination proportion."
            },
            [
                "A sample proportion is not automatically the exact population proportion.",
                "Convert decimals and percentages carefully.",
                "Larger samples give more precise proportion estimates."
            ],
            [
                "PROPORTION = number with outcome ÷ total.",
                "p-hat = sample proportion."
            ],
            [
                "Sample proportions estimate population proportions.",
                "p-hat equals x divided by n.",
                "Standard error measures sampling variability.",
                "Larger samples narrow intervals.",
                "Proportions can be reported as decimals or percentages."
            ],
            [
                {
                    id: "ciprop1",
                    type: "numeric",
                    q: "45 of 180 patients experience an outcome. What is the sample proportion?",
                    answer: 0.25,
                    tolerance: 0.0001,
                    unit: "",
                    explanation: "45 ÷ 180 = 0.25."
                },
                {
                    id: "ciprop2",
                    type: "mcq",
                    q: "Which change generally makes a confidence interval for a proportion narrower?",
                    choices: [
                        "Increasing sample size",
                        "Decreasing sample size",
                        "Increasing confidence level from 95% to 99%",
                        "Increasing standard error"
                    ],
                    answer: 0,
                    explanation: "Larger samples reduce standard error and improve precision."
                }
            ]
        ),

        // ====================================================================
        // MODULE 5
        // ====================================================================

        topic(
            "hypothesis-basics",
            17,
            5,
            "Hypothesis Testing: Null & Alternative Hypotheses",
            "Learn the logic of statistical hypothesis testing and how null and alternative hypotheses are constructed.",
            [
                "Define null and alternative hypotheses.",
                "Explain test statistics.",
                "Explain evidence against the null hypothesis.",
                "Differentiate one-sided and two-sided alternatives.",
                "Connect hypotheses to research questions."
            ],
            [
                ["Null hypothesis", "Default claim usually representing no difference, no association or a specified parameter value."],
                ["Alternative hypothesis", "Competing claim supported when evidence against the null is sufficiently strong."],
                ["Test statistic", "Standardized measure comparing observed data with what is expected under the null hypothesis."],
                ["Two-sided test", "Test allowing differences in either direction."],
                ["One-sided test", "Test focused on one prespecified direction."]
            ],
            [
                "Typical mean test: H₀: μ = μ₀",
                "Two-sided alternative: Hₐ: μ ≠ μ₀"
            ],
            [
                section(
                    "NULL HYPOTHESIS",
                    "Start With a Baseline Claim",
                    [
                        "The null hypothesis usually represents no effect or a specific reference value.",
                        "For a medication trial comparing mean blood pressure reductions, the null may state that the population mean difference equals zero.",
                        "The test asks whether the observed data are difficult to reconcile with that null model."
                    ]
                ),
                section(
                    "ALTERNATIVE HYPOTHESIS",
                    "What the Study Seeks Evidence For",
                    [
                        "A two-sided alternative states the parameter is different from the null value.",
                        "A one-sided alternative specifies a direction before examining the data.",
                        "Choosing the direction after seeing the results creates bias."
                    ]
                ),
                section(
                    "TEST STATISTIC",
                    "Signal Relative to Noise",
                    [
                        "A test statistic measures how far the observed estimate is from the null value relative to its expected sampling variability.",
                        "Large absolute test statistics indicate the data are far from what the null predicts.",
                        "The p-value converts that extremeness into a probability under the null model."
                    ]
                ),
                section(
                    "CONCLUSIONS",
                    "Reject or Fail to Reject",
                    [
                        "Statistical testing usually concludes by rejecting or failing to reject the null hypothesis.",
                        "Failing to reject does not prove the null is true.",
                        "The study may simply lack enough evidence or power to detect a real effect."
                    ]
                )
            ],
            [],
            [
                practice(
                    "A trial asks whether a new medication changes mean systolic blood pressure from 130 mmHg in either direction. Write the null and alternative hypotheses.",
                    "H₀: μ = 130; Hₐ: μ ≠ 130.",
                    [
                        "The null uses the reference value.",
                        "Because the question allows either direction, use a two-sided alternative."
                    ]
                ),
                practice(
                    "Does failing to reject H₀ prove H₀ is true?",
                    "No.",
                    [
                        "Lack of sufficient evidence against the null is not proof of the null.",
                        "The study may be underpowered."
                    ]
                )
            ],
            {
                title: "New Antihypertensive Trial",
                scenario: "Researchers test whether a new drug changes average systolic blood pressure compared with standard treatment.",
                connection: "The null hypothesis commonly represents no population difference, while the alternative represents a true difference."
            },
            [
                "Failing to reject H₀ is not the same as proving H₀.",
                "One-sided alternatives should be chosen before examining the results.",
                "Statistical hypotheses concern population parameters, not individual patients."
            ],
            [
                "NULL = no change/no difference.",
                "ALTERNATIVE = evidence researchers seek.",
                "FAIL TO REJECT ≠ prove null."
            ],
            [
                "The null is the baseline model.",
                "The alternative competes with the null.",
                "Test statistics measure departure from the null.",
                "Two-sided tests allow either direction.",
                "Failing to reject does not prove no effect."
            ],
            [
                {
                    id: "hyp1",
                    type: "mcq",
                    q: "A researcher tests whether mean recovery time differs from 10 days in either direction. Which alternative is appropriate?",
                    choices: [
                        "Hₐ: μ ≠ 10",
                        "Hₐ: μ = 10",
                        "Hₐ: μ > 0 only",
                        "H₀: μ ≠ 10"
                    ],
                    answer: 0,
                    explanation: "A two-sided alternative uses not equal when either higher or lower values are meaningful."
                },
                {
                    id: "hyp2",
                    type: "mcq",
                    q: "What does failure to reject the null hypothesis mean?",
                    choices: [
                        "The sample did not provide sufficient evidence against the null.",
                        "The null has been proven with certainty.",
                        "The alternative is impossible.",
                        "The sample size must be zero."
                    ],
                    answer: 0,
                    explanation: "Failure to reject means the evidence was not strong enough to reject the null."
                }
            ]
        ),

        topic(
            "p-values-alpha",
            18,
            5,
            "P-Values, Alpha & Statistical Significance",
            "Master the meaning of p-values and understand statistical significance without common misconceptions.",
            [
                "Define p-value.",
                "Define significance level alpha.",
                "Use p-value decision rules.",
                "Explain statistical significance.",
                "Differentiate statistical and clinical significance."
            ],
            [
                ["P-value", "Probability, assuming the null hypothesis is true, of obtaining results at least as extreme as those observed."],
                ["Alpha", "Predetermined significance threshold for deciding whether evidence is sufficient to reject the null."],
                ["Statistical significance", "Result meeting the chosen statistical threshold, commonly p < alpha."],
                ["Clinical significance", "Magnitude of effect large enough to matter in practice."]
            ],
            [
                "If p ≤ α → reject H₀",
                "If p > α → fail to reject H₀"
            ],
            [
                section(
                    "WHAT A P-VALUE MEANS",
                    "Probability of the Data Under the Null Model",
                    [
                        "The p-value assumes the null hypothesis is true.",
                        "It asks how unusual the observed data, or more extreme data, would be under that assumption.",
                        "A small p-value means the observed result is difficult to explain using the null model alone."
                    ]
                ),
                section(
                    "WHAT A P-VALUE DOES NOT MEAN",
                    "Avoid the Most Common Misinterpretations",
                    [
                        "A p-value is not the probability that the null hypothesis is true.",
                        "It is not the probability the findings occurred purely by chance in a general sense.",
                        "It does not measure effect size."
                    ]
                ),
                section(
                    "ALPHA",
                    "Choose the Threshold Before Testing",
                    [
                        "Alpha is commonly set at 0.05.",
                        "If p is less than or equal to alpha, the result is called statistically significant and the null is rejected.",
                        "Alpha represents the tolerated Type I error rate under repeated testing procedures."
                    ]
                ),
                section(
                    "CLINICAL VS STATISTICAL SIGNIFICANCE",
                    "A Tiny Effect Can Be Statistically Significant",
                    [
                        "Very large samples can detect extremely small differences.",
                        "A blood-pressure difference of 0.5 mmHg might produce p < 0.001 in a huge study but be clinically unimportant.",
                        "Effect size, confidence intervals, adverse effects, cost and patient priorities must also be considered."
                    ]
                )
            ],
            [
                worked(
                    "P-Value Decision",
                    "A study reports p = 0.03 with α = 0.05. What is the decision?",
                    [
                        "Compare p with alpha.",
                        "0.03 < 0.05.",
                        "Reject the null hypothesis."
                    ],
                    "Reject H₀"
                )
            ],
            [
                practice(
                    "If p = 0.12 and α = 0.05, what is the decision?",
                    "Fail to reject H₀.",
                    [
                        "0.12 is greater than 0.05.",
                        "Evidence is not sufficient to reject the null at the 5% level."
                    ]
                ),
                practice(
                    "Does p = 0.001 prove the alternative hypothesis with 99.9% probability?",
                    "No.",
                    [
                        "A p-value is not the probability that a hypothesis is true.",
                        "It describes the extremeness of data assuming the null is true."
                    ]
                )
            ],
            {
                title: "Large Clinical Trial",
                scenario: "A treatment reduces hospital stay by 0.1 day with p < 0.001.",
                connection: "The result may be statistically significant but the clinical importance of a 0.1-day reduction still requires judgment."
            },
            [
                "P-value is not P(H₀ is true).",
                "P-value does not measure effect size.",
                "Statistical significance is not automatically clinical significance."
            ],
            [
                "LOW p = data look unusual under H₀.",
                "p below alpha = reject.",
                "SIGNIFICANT statistically ≠ important clinically."
            ],
            [
                "P-values assume the null model.",
                "Small p-values provide evidence against H₀.",
                "Alpha is the decision threshold.",
                "p ≤ alpha leads to rejection.",
                "Statistical significance does not measure clinical importance."
            ],
            [
                {
                    id: "pval1",
                    type: "mcq",
                    q: "A study reports p = 0.04 with α = 0.05. What is the standard decision?",
                    choices: [
                        "Reject H₀",
                        "Fail to reject H₀",
                        "Prove H₀",
                        "Increase p to 0.50"
                    ],
                    answer: 0,
                    explanation: "Because 0.04 < 0.05, the result meets the chosen significance threshold."
                },
                {
                    id: "pval2",
                    type: "mcq",
                    q: "Which statement about a p-value is correct?",
                    choices: [
                        "It is calculated assuming the null hypothesis is true.",
                        "It is the probability that the null is true.",
                        "It directly measures clinical importance.",
                        "It must always equal alpha."
                    ],
                    answer: 0,
                    explanation: "The p-value is calculated under the assumption that the null hypothesis is true."
                }
            ],
            ["Research", "High Yield", "Clinical"]
        ),

        topic(
            "type-errors-power",
            19,
            5,
            "Type I Error, Type II Error & Statistical Power",
            "Learn the two major hypothesis-testing errors and how sample size, effect size and variability influence power.",
            [
                "Define Type I error.",
                "Define Type II error.",
                "Define power.",
                "Explain how sample size influences power.",
                "Explain alpha-power tradeoffs."
            ],
            [
                ["Type I error", "Rejecting a true null hypothesis."],
                ["Type II error", "Failing to reject a false null hypothesis."],
                ["Power", "Probability of correctly rejecting a false null hypothesis."],
                ["False positive", "Common informal description of a Type I error."],
                ["False negative", "Common informal description of a Type II error."],
                ["Effect size", "Magnitude of a difference or relationship."]
            ],
            [
                "Power = 1 − β",
                "Type I error probability = α",
                "Type II error probability = β"
            ],
            [
                section(
                    "TYPE I ERROR",
                    "False Alarm",
                    [
                        "A Type I error occurs when a researcher rejects the null even though it is actually true.",
                        "If alpha is 0.05, the long-run procedure tolerates about a 5% Type I error rate when the null is true.",
                        "Lowering alpha reduces Type I errors but can make true effects harder to detect."
                    ]
                ),
                section(
                    "TYPE II ERROR",
                    "Missing a Real Effect",
                    [
                        "A Type II error occurs when the null is false but the study fails to reject it.",
                        "Small samples, weak effects and high variability increase the risk of Type II error.",
                        "This is why a nonsignificant result may reflect insufficient power rather than true absence of effect."
                    ]
                ),
                section(
                    "POWER",
                    "Ability to Detect a Real Effect",
                    [
                        "Power equals 1 minus beta.",
                        "A study with 80% power has an 80% probability of detecting the prespecified effect size under the planning assumptions.",
                        "Power is usually considered before data collection."
                    ]
                ),
                section(
                    "WHAT INCREASES POWER",
                    "More Signal or Less Noise",
                    [
                        "Increasing sample size generally increases power.",
                        "Larger true effect sizes are easier to detect.",
                        "Lower variability also improves power.",
                        "Using a higher alpha increases power but increases Type I error risk."
                    ]
                )
            ],
            [],
            [
                practice(
                    "A study concludes a medication works when in reality it does not. Which error occurred?",
                    "Type I error.",
                    [
                        "The null was actually true.",
                        "The study incorrectly rejected it."
                    ]
                ),
                practice(
                    "A study fails to detect a real treatment effect. Which error occurred?",
                    "Type II error.",
                    [
                        "The null was actually false.",
                        "The study failed to reject it."
                    ]
                ),
                practice(
                    "If beta = 0.20, what is power?",
                    "0.80 or 80%.",
                    [
                        "Power = 1 − beta.",
                        "1 − 0.20 = 0.80."
                    ]
                )
            ],
            {
                title: "Underpowered Trial",
                scenario: "A small study finds no statistically significant treatment effect, but the confidence interval is extremely wide.",
                connection: "Low power and imprecision may explain the nonsignificant result."
            },
            [
                "Type I and Type II errors refer to the true state of the null hypothesis, which is unknown in real studies.",
                "Nonsignificant does not prove no effect.",
                "Increasing sample size usually increases power."
            ],
            [
                "TYPE I = false positive.",
                "TYPE II = false negative.",
                "POWER = find a real effect."
            ],
            [
                "Type I error rejects a true null.",
                "Type II error misses a real effect.",
                "Power equals 1 − beta.",
                "Larger samples increase power.",
                "Larger effects are easier to detect."
            ],
            [
                {
                    id: "error1",
                    type: "mcq",
                    q: "Rejecting a null hypothesis that is actually true is called:",
                    choices: [
                        "Type I error",
                        "Type II error",
                        "Power",
                        "Confidence level"
                    ],
                    answer: 0,
                    explanation: "A Type I error is a false-positive rejection of a true null hypothesis."
                },
                {
                    id: "error2",
                    type: "numeric",
                    q: "If β = 0.15, what is statistical power?",
                    answer: 0.85,
                    tolerance: 0.0001,
                    unit: "",
                    explanation: "Power = 1 − 0.15 = 0.85."
                }
            ]
        ),

        topic(
            "one-sample-t",
            20,
            5,
            "One-Sample t Test",
            "Learn how to test whether a population mean differs from a hypothesized value.",
            [
                "State hypotheses for a one-sample t test.",
                "Calculate standard error.",
                "Calculate a t statistic.",
                "Interpret the sign and magnitude of t.",
                "Identify assumptions."
            ],
            [
                ["One-sample t test", "Hypothesis test comparing a sample mean with a hypothesized population mean."],
                ["t statistic", "Standardized difference between observed and hypothesized mean."],
                ["Degrees of freedom", "For a one-sample t test, typically n − 1."]
            ],
            [
                "t = (x̄ − μ₀) ÷ (s ÷ √n)",
                "df = n − 1"
            ],
            [
                section(
                    "QUESTION TYPE",
                    "Compare One Sample Mean With a Reference Value",
                    [
                        "A one-sample t test is appropriate when a quantitative outcome from one sample is compared with a specified population value.",
                        "Examples include comparing mean hemoglobin with a reference value or average recovery time with a historical target."
                    ]
                ),
                section(
                    "NUMERATOR",
                    "Observed Difference",
                    [
                        "The numerator x-bar minus mu-zero measures the difference between the sample mean and the null value.",
                        "A positive difference produces a positive t statistic.",
                        "A negative difference produces a negative t statistic."
                    ]
                ),
                section(
                    "DENOMINATOR",
                    "Standard Error",
                    [
                        "The denominator is the estimated standard error s divided by square root n.",
                        "The t statistic therefore expresses the observed difference in standard-error units."
                    ]
                ),
                section(
                    "INTERPRETATION",
                    "Large Absolute t Means Stronger Departure",
                    [
                        "Values near zero indicate the sample mean is close to the null value relative to sampling variability.",
                        "Large positive or negative t values are more difficult to explain under the null.",
                        "The p-value depends on the t statistic and degrees of freedom."
                    ]
                )
            ],
            [
                worked(
                    "One-Sample t",
                    "x̄ = 105, μ₀ = 100, s = 10, n = 25. Calculate t.",
                    [
                        "SE = 10 ÷ √25 = 2.",
                        "Difference = 105 − 100 = 5.",
                        "t = 5 ÷ 2 = 2.5.",
                        "df = 25 − 1 = 24."
                    ],
                    "t = 2.5; df = 24"
                )
            ],
            [
                practice(
                    "x̄ = 52, μ₀ = 50, s = 8, n = 16. Calculate t.",
                    "1.0.",
                    [
                        "SE = 8 ÷ √16 = 2.",
                        "Difference = 52 − 50 = 2.",
                        "t = 2 ÷ 2 = 1."
                    ]
                ),
                practice(
                    "For n = 31 in a one-sample t test, what are the degrees of freedom?",
                    "30.",
                    [
                        "df = n − 1.",
                        "31 − 1 = 30."
                    ]
                )
            ],
            {
                title: "Average Recovery Target",
                scenario: "A hospital tests whether mean postoperative recovery time differs from a historical target of 4 days.",
                connection: "A one-sample t procedure can compare the observed sample mean with the 4-day reference value."
            },
            [
                "The t statistic uses standard error, not raw standard deviation alone.",
                "Degrees of freedom are usually n − 1.",
                "A negative t statistic is not automatically bad; it indicates direction."
            ],
            [
                "ONE SAMPLE = one mean vs one target.",
                "t = difference ÷ SE."
            ],
            [
                "One-sample t compares a mean with a reference.",
                "The numerator is observed minus expected.",
                "The denominator is standard error.",
                "Large absolute t indicates stronger disagreement with H₀.",
                "df is n − 1."
            ],
            [
                {
                    id: "t1",
                    type: "numeric",
                    q: "A sample has x̄ = 74, μ₀ = 70, s = 12 and n = 36. What is t?",
                    answer: 2,
                    tolerance: 0.001,
                    unit: "",
                    explanation: "SE = 12 ÷ 6 = 2. Difference = 4. t = 4 ÷ 2 = 2."
                },
                {
                    id: "t2",
                    type: "numeric",
                    q: "For n = 20 in a one-sample t test, what is df?",
                    answer: 19,
                    tolerance: 0,
                    unit: "",
                    explanation: "df = n − 1 = 19."
                }
            ],
            ["Calculation", "Research", "High Yield"]
        ),

        topic(
            "two-sample-paired",
            21,
            5,
            "Independent-Samples & Paired t Tests",
            "Differentiate independent-group comparisons from paired or repeated-measures comparisons.",
            [
                "Identify independent samples.",
                "Identify paired data.",
                "Choose between independent and paired t tests.",
                "Explain why pairing reduces subject-to-subject variability.",
                "Interpret mean differences."
            ],
            [
                ["Independent samples", "Groups containing different unrelated individuals or observations."],
                ["Paired samples", "Measurements naturally matched or repeatedly measured on the same unit."],
                ["Independent-samples t test", "Compares means of two independent groups."],
                ["Paired t test", "Tests the mean of within-pair differences."],
                ["Repeated measures", "Multiple observations taken from the same subject."]
            ],
            [
                "Paired analysis uses differences: d = after − before",
                "Paired t test analyzes mean difference d̄"
            ],
            [
                section(
                    "INDEPENDENT GROUPS",
                    "Different People in Each Group",
                    [
                        "If one group receives treatment A and a different group receives treatment B, observations are independent when one person's value is not naturally paired with another's.",
                        "The independent-samples t test compares population means between those groups."
                    ]
                ),
                section(
                    "PAIRED DATA",
                    "Same Person Twice or Matched Pairs",
                    [
                        "Before-and-after measurements on the same patient are paired.",
                        "Each subject acts partly as their own control.",
                        "The analysis focuses on the difference within each pair."
                    ]
                ),
                section(
                    "WHY PAIRING HELPS",
                    "Remove Between-Person Noise",
                    [
                        "People vary in baseline blood pressure, weight and many other characteristics.",
                        "By comparing each patient with themselves, paired designs remove much of that baseline variability.",
                        "This can improve statistical power."
                    ]
                ),
                section(
                    "COMMON MISTAKE",
                    "Do Not Treat Paired Data as Independent",
                    [
                        "Ignoring pairing throws away information.",
                        "It can overestimate variability and reduce statistical efficiency.",
                        "The study design determines the analysis."
                    ]
                )
            ],
            [
                worked(
                    "Identify the Test",
                    "Blood pressure is measured in 40 patients before and after an intervention.",
                    [
                        "The same patients are measured twice.",
                        "Each before value is naturally matched with the patient's after value.",
                        "Use a paired t test."
                    ],
                    "Paired t test"
                )
            ],
            [
                practice(
                    "Two unrelated groups of patients receive two different wound dressings. Which t-test design is appropriate?",
                    "Independent-samples t test.",
                    [
                        "Different patients appear in each group.",
                        "There is no natural pairing."
                    ]
                ),
                practice(
                    "The same nurses are tested before and after an educational program. Which design is appropriate?",
                    "Paired t test.",
                    [
                        "Each nurse has two related measurements."
                    ]
                )
            ],
            {
                title: "Before-and-After Pain Scores",
                scenario: "Pain scores are recorded in the same patients immediately before and 30 minutes after analgesic administration.",
                connection: "The measurements are paired because each post-treatment score is linked to that same patient's baseline score."
            },
            [
                "Repeated measures are not independent.",
                "Paired t tests analyze differences, not two unrelated means.",
                "Matching must be real and defined by study design."
            ],
            [
                "SAME PEOPLE twice = paired.",
                "DIFFERENT PEOPLE = independent."
            ],
            [
                "Independent t tests compare unrelated groups.",
                "Paired t tests compare matched observations.",
                "Before-after studies are commonly paired.",
                "Pairing can reduce variability.",
                "Study design determines which test is appropriate."
            ],
            [
                {
                    id: "paired1",
                    type: "mcq",
                    q: "The same 30 patients have heart rate measured before and after a medication. Which test structure is most appropriate?",
                    choices: [
                        "Paired t test",
                        "Independent-samples t test",
                        "Chi-square test only",
                        "No statistical test can be used"
                    ],
                    answer: 0,
                    explanation: "The same patients provide both measurements, so observations are paired."
                },
                {
                    id: "paired2",
                    type: "mcq",
                    q: "Two separate groups of patients receive different therapies. The groups contain different individuals. This is:",
                    choices: [
                        "Independent samples",
                        "Paired samples",
                        "Identical samples",
                        "A census"
                    ],
                    answer: 0,
                    explanation: "The observations come from different unrelated individuals."
                }
            ],
            ["Research", "Clinical", "High Yield"]
        ),

        topic(
            "chi-square",
            22,
            5,
            "Chi-Square Tests for Categorical Data",
            "Learn how chi-square tests compare observed and expected frequencies and evaluate associations between categorical variables.",
            [
                "Identify categorical data suitable for chi-square.",
                "Calculate expected counts conceptually.",
                "Explain observed versus expected counts.",
                "Interpret a chi-square statistic.",
                "Describe chi-square test of independence."
            ],
            [
                ["Chi-square test", "Statistical test based on differences between observed and expected frequencies."],
                ["Observed count", "Actual frequency measured in a category."],
                ["Expected count", "Frequency predicted under the null hypothesis."],
                ["Contingency table", "Table displaying counts for combinations of categorical variables."],
                ["Chi-square test of independence", "Test evaluating whether two categorical variables are associated."]
            ],
            [
                "χ² = Σ[(O − E)² ÷ E]",
                "Expected count = (row total × column total) ÷ grand total"
            ],
            [
                section(
                    "WHEN TO USE CHI-SQUARE",
                    "Counts in Categories",
                    [
                        "Chi-square tests are designed for categorical frequency data.",
                        "Examples include infection yes/no by catheter type or smoking status by disease category.",
                        "The test does not compare numerical means."
                    ]
                ),
                section(
                    "OBSERVED VS EXPECTED",
                    "How Different Are the Counts?",
                    [
                        "Observed counts are the actual cell frequencies.",
                        "Expected counts are calculated assuming the null hypothesis is true.",
                        "Large differences between observed and expected counts increase the chi-square statistic."
                    ]
                ),
                section(
                    "TEST OF INDEPENDENCE",
                    "Association Between Two Categorical Variables",
                    [
                        "The null hypothesis states that the variables are independent.",
                        "A significant result provides evidence of an association.",
                        "It does not automatically prove one variable causes the other."
                    ]
                ),
                section(
                    "EXPECTED COUNTS",
                    "Use Marginal Totals",
                    [
                        "For a contingency-table cell, multiply its row total by its column total and divide by the grand total.",
                        "Small expected counts can violate standard chi-square approximations.",
                        "Alternative exact methods may then be considered."
                    ]
                )
            ],
            [
                worked(
                    "Expected Count",
                    "A 2×2 table has row total 40, column total 50 and grand total 100. What is the expected count for that cell?",
                    [
                        "Expected = row total × column total ÷ grand total.",
                        "40 × 50 = 2000.",
                        "2000 ÷ 100 = 20."
                    ],
                    "20"
                )
            ],
            [
                practice(
                    "If row total = 30, column total = 60 and grand total = 120, what is the expected count?",
                    "15.",
                    [
                        "30 × 60 = 1800.",
                        "1800 ÷ 120 = 15."
                    ]
                ),
                practice(
                    "Does a significant chi-square test prove causation?",
                    "No.",
                    [
                        "Chi-square identifies association.",
                        "Causation requires stronger design and evidence."
                    ]
                )
            ],
            {
                title: "Smoking and Wound Healing",
                scenario: "Researchers compare smoking status with delayed wound-healing category.",
                connection: "Both variables are categorical, so a chi-square test of independence may evaluate whether they are associated."
            },
            [
                "Chi-square analyzes counts, not means.",
                "Association does not prove causation.",
                "Expected counts come from row and column totals."
            ],
            [
                "CHI-SQUARE = categories and counts.",
                "Observed vs expected."
            ],
            [
                "Chi-square tests categorical variables.",
                "Observed counts come from data.",
                "Expected counts come from the null model.",
                "Larger discrepancies increase chi-square.",
                "Significance indicates association, not necessarily causation."
            ],
            [
                {
                    id: "chi1",
                    type: "numeric",
                    q: "For a contingency-table cell, row total = 45, column total = 40 and grand total = 120. What is the expected count?",
                    answer: 15,
                    tolerance: 0.001,
                    unit: "",
                    explanation: "(45 × 40) ÷ 120 = 1800 ÷ 120 = 15."
                },
                {
                    id: "chi2",
                    type: "mcq",
                    q: "Which data are most appropriate for a chi-square test of independence?",
                    choices: [
                        "Smoking category and infection yes/no",
                        "Mean blood pressure and mean heart rate",
                        "Two continuous regression slopes only",
                        "A single patient temperature"
                    ],
                    answer: 0,
                    explanation: "Chi-square evaluates relationships between categorical variables."
                }
            ],
            ["Calculation", "Research", "High Yield"]
        ),

        topic(
            "anova",
            23,
            5,
            "ANOVA: Comparing Three or More Means",
            "Understand why analysis of variance is used to compare multiple group means.",
            [
                "Explain the purpose of ANOVA.",
                "Define between-group and within-group variation.",
                "Interpret the F statistic.",
                "Explain the ANOVA null hypothesis.",
                "Explain why post-hoc tests may be needed."
            ],
            [
                ["ANOVA", "Analysis of variance used to compare means across three or more groups."],
                ["F statistic", "Ratio of between-group variability to within-group variability."],
                ["Between-group variation", "Variation due to differences among group means."],
                ["Within-group variation", "Variation among observations inside groups."],
                ["Post-hoc test", "Follow-up comparison used after significant ANOVA to determine which groups differ."]
            ],
            [
                "F = between-group variance ÷ within-group variance"
            ],
            [
                section(
                    "WHY NOT MANY t TESTS",
                    "Repeated Testing Inflates Error",
                    [
                        "Suppose four treatment groups are compared.",
                        "Running many separate t tests increases the chance of at least one Type I error.",
                        "ANOVA provides one overall test of equality among the means."
                    ]
                ),
                section(
                    "NULL HYPOTHESIS",
                    "All Population Means Are Equal",
                    [
                        "The ANOVA null states that all population group means are equal.",
                        "The alternative states that at least one mean differs.",
                        "ANOVA alone does not identify exactly which group differs."
                    ]
                ),
                section(
                    "F STATISTIC",
                    "Signal Relative to Background Variation",
                    [
                        "If group means are very different but observations within each group are relatively consistent, the F statistic becomes large.",
                        "A large F provides evidence against the equal-means null hypothesis.",
                        "The p-value determines whether the observed F is statistically significant."
                    ]
                ),
                section(
                    "POST-HOC TESTING",
                    "Find the Groups That Differ",
                    [
                        "After a significant overall ANOVA, follow-up comparisons may be performed.",
                        "Methods such as Tukey procedures control error while identifying specific group differences.",
                        "Post-hoc analysis should respect the original study plan."
                    ]
                )
            ],
            [],
            [
                practice(
                    "A study compares mean pain scores across four different treatment groups. Which broad test is appropriate?",
                    "ANOVA.",
                    [
                        "The outcome is quantitative.",
                        "There are more than two groups.",
                        "ANOVA compares multiple means."
                    ]
                ),
                practice(
                    "A significant ANOVA proves every group mean differs from every other group. True or false?",
                    "False.",
                    [
                        "The overall test only shows that at least one mean differs.",
                        "Post-hoc comparisons are needed to locate specific differences."
                    ]
                )
            ],
            {
                title: "Four Wound-Dressing Groups",
                scenario: "Researchers compare mean healing time across four wound-dressing products.",
                connection: "ANOVA evaluates whether the group means differ overall without performing many unadjusted pairwise t tests."
            },
            [
                "A significant ANOVA does not mean every group differs.",
                "ANOVA compares means, despite its name emphasizing variance.",
                "Post-hoc tests are often needed after a significant result."
            ],
            [
                "ANOVA = 3+ means.",
                "F = between variation ÷ within variation."
            ],
            [
                "ANOVA compares three or more means.",
                "The null states all means are equal.",
                "F compares between-group with within-group variation.",
                "A large F supports differences among means.",
                "Post-hoc tests identify specific differences."
            ],
            [
                {
                    id: "anova1",
                    type: "mcq",
                    q: "A researcher compares mean cholesterol levels across five diet groups. Which test is most appropriate for an overall comparison?",
                    choices: [
                        "ANOVA",
                        "Chi-square only",
                        "One-sample proportion test only",
                        "No analysis"
                    ],
                    answer: 0,
                    explanation: "ANOVA is designed to compare means across three or more groups."
                },
                {
                    id: "anova2",
                    type: "mcq",
                    q: "A significant ANOVA indicates:",
                    choices: [
                        "At least one population mean differs.",
                        "Every group differs from every other group.",
                        "All group means are equal.",
                        "The outcome must be categorical."
                    ],
                    answer: 0,
                    explanation: "The global alternative states that not all population means are equal."
                }
            ]
        ),

        // ====================================================================
        // MODULE 6
        // ====================================================================

        topic(
            "correlation",
            24,
            6,
            "Correlation & Pearson's r",
            "Learn how correlation measures direction and strength of linear association.",
            [
                "Define correlation.",
                "Interpret Pearson's r.",
                "Identify positive and negative relationships.",
                "Explain why correlation does not imply causation.",
                "Recognize the effect of outliers."
            ],
            [
                ["Correlation", "Measure of association between two quantitative variables."],
                ["Pearson's r", "Measure of strength and direction of linear association ranging from −1 to +1."],
                ["Positive correlation", "As one variable increases, the other tends to increase."],
                ["Negative correlation", "As one variable increases, the other tends to decrease."],
                ["Zero correlation", "Little or no linear association."],
                ["Scatterplot", "Graph of paired quantitative observations."]
            ],
            [
                "−1 ≤ r ≤ +1"
            ],
            [
                section(
                    "DIRECTION",
                    "Positive and Negative Associations",
                    [
                        "A positive correlation means larger x values tend to occur with larger y values.",
                        "A negative correlation means larger x values tend to occur with smaller y values.",
                        "The sign describes direction."
                    ]
                ),
                section(
                    "STRENGTH",
                    "Absolute Value Matters",
                    [
                        "Values of r near 1 or −1 indicate strong linear relationships.",
                        "Values near zero indicate weak linear association.",
                        "Context determines what counts as a meaningful strength."
                    ]
                ),
                section(
                    "SCATTERPLOTS",
                    "Always Look at the Data",
                    [
                        "Scatterplots can reveal nonlinearity, clusters and outliers that one correlation coefficient may hide.",
                        "A strong curved relationship can have a relatively low Pearson correlation.",
                        "Outliers can dramatically change r."
                    ]
                ),
                section(
                    "CORRELATION IS NOT CAUSATION",
                    "Association May Have Other Explanations",
                    [
                        "A third variable may explain the relationship.",
                        "Reverse causation may be possible.",
                        "Randomized experimental evidence is usually stronger for causal claims."
                    ]
                )
            ],
            [],
            [
                practice(
                    "Interpret r = −0.82.",
                    "Strong negative linear relationship.",
                    [
                        "The negative sign indicates inverse direction.",
                        "Absolute value 0.82 is close to 1, indicating strong linear association."
                    ]
                ),
                practice(
                    "Interpret r = 0.05.",
                    "Very weak linear relationship.",
                    [
                        "The value is very close to zero.",
                        "That indicates little linear association."
                    ]
                )
            ],
            {
                title: "Exercise and Resting Heart Rate",
                scenario: "Higher weekly exercise hours are associated with lower resting heart rate.",
                connection: "A negative correlation may describe the relationship, but observational correlation alone does not prove exercise caused the lower heart rate."
            },
            [
                "Correlation measures linear association.",
                "r = 0 does not rule out a nonlinear relationship.",
                "Correlation does not prove causation.",
                "Outliers can strongly affect r."
            ],
            [
                "r near +1 = strong positive.",
                "r near −1 = strong negative.",
                "r near 0 = weak linear relationship."
            ],
            [
                "Correlation measures linear association.",
                "r ranges from −1 to +1.",
                "Sign gives direction.",
                "Absolute value gives strength.",
                "Scatterplots should accompany correlation.",
                "Correlation does not establish causation."
            ],
            [
                {
                    id: "corr1",
                    type: "mcq",
                    q: "Which correlation represents the strongest linear relationship?",
                    choices: [
                        "r = −0.91",
                        "r = 0.42",
                        "r = 0.10",
                        "r = −0.35"
                    ],
                    answer: 0,
                    explanation: "Strength depends on absolute value. |−0.91| is closest to 1."
                },
                {
                    id: "corr2",
                    type: "mcq",
                    q: "Which statement about correlation is correct?",
                    choices: [
                        "Correlation alone does not prove causation.",
                        "r can be greater than 5.",
                        "r = 0 proves no relationship of any type.",
                        "Negative correlation means no association."
                    ],
                    answer: 0,
                    explanation: "Confounding and other mechanisms can produce associations without causation."
                }
            ],
            ["Research", "High Yield", "Theory"]
        ),

        topic(
            "regression",
            25,
            6,
            "Simple Linear Regression",
            "Learn regression equations, slope, intercept, prediction and R-squared.",
            [
                "Identify predictor and outcome variables.",
                "Interpret slope.",
                "Interpret intercept.",
                "Use a regression equation for prediction.",
                "Interpret R-squared.",
                "Recognize extrapolation risk."
            ],
            [
                ["Regression", "Method modeling the relationship between an outcome and one or more predictors."],
                ["Predictor variable", "Variable used to explain or predict an outcome."],
                ["Outcome variable", "Variable being predicted or explained."],
                ["Slope", "Expected change in y for a one-unit increase in x."],
                ["Intercept", "Predicted y when x = 0."],
                ["R-squared", "Proportion of variation in the outcome explained by the regression model."],
                ["Extrapolation", "Prediction outside the range of observed predictor values."]
            ],
            [
                "ŷ = a + bx"
            ],
            [
                section(
                    "REGRESSION LINE",
                    "Predict y From x",
                    [
                        "Simple linear regression models a straight-line relationship between one predictor x and one outcome y.",
                        "The fitted equation is commonly written y-hat equals intercept plus slope times x.",
                        "The line minimizes squared prediction errors under standard least-squares regression."
                    ]
                ),
                section(
                    "SLOPE",
                    "Change in Outcome per One Unit of Predictor",
                    [
                        "If slope = −2, each one-unit increase in x is associated with an average decrease of 2 units in predicted y.",
                        "The units of the slope depend on both variables.",
                        "Slope describes association unless the study design supports causal interpretation."
                    ]
                ),
                section(
                    "INTERCEPT",
                    "Predicted Outcome at x = 0",
                    [
                        "The intercept is the predicted y value when x equals zero.",
                        "Sometimes x = 0 is meaningful.",
                        "Other times it lies outside the observed range and has little practical interpretation."
                    ]
                ),
                section(
                    "R-SQUARED",
                    "Explained Variation",
                    [
                        "R-squared ranges from 0 to 1.",
                        "An R-squared of 0.64 means the model explains 64% of the observed variation in the outcome.",
                        "A high R-squared does not prove causality or guarantee unbiased predictions."
                    ]
                ),
                section(
                    "EXTRAPOLATION",
                    "Do Not Predict Far Beyond the Data",
                    [
                        "Relationships can change outside the observed range.",
                        "A line fitted to adults aged 20 to 60 may not safely predict outcomes for newborns or 100-year-old adults.",
                        "Predictions are most defensible within the region where data were observed."
                    ]
                )
            ],
            [
                worked(
                    "Regression Prediction",
                    "A model is ŷ = 40 + 3x. Predict y when x = 5.",
                    [
                        "Substitute x = 5.",
                        "ŷ = 40 + 3(5).",
                        "ŷ = 40 + 15 = 55."
                    ],
                    "55"
                )
            ],
            [
                practice(
                    "For ŷ = 10 + 2.5x, predict y when x = 4.",
                    "20.",
                    [
                        "2.5 × 4 = 10.",
                        "10 + 10 = 20."
                    ]
                ),
                practice(
                    "In ŷ = 12 − 0.8x, interpret the slope.",
                    "Predicted y decreases by 0.8 units for each one-unit increase in x.",
                    [
                        "The slope is −0.8.",
                        "Negative slope means the predicted outcome decreases as x increases."
                    ]
                )
            ],
            {
                title: "Predicting Length of Stay",
                scenario: "A model predicts hospital length of stay from a severity score.",
                connection: "Regression can estimate expected length of stay, but predictions should be interpreted within the population and score range used to build the model."
            },
            [
                "Slope is not the same as correlation.",
                "The intercept may not be clinically meaningful.",
                "R-squared does not prove causation.",
                "Avoid extrapolation beyond observed data."
            ],
            [
                "REGRESSION = prediction line.",
                "SLOPE = change in y for +1 x.",
                "R² = explained variation."
            ],
            [
                "Regression predicts an outcome from predictors.",
                "Slope describes average change.",
                "Intercept predicts y at x = 0.",
                "R-squared measures explained variation.",
                "Prediction outside observed ranges is risky."
            ],
            [
                {
                    id: "reg1",
                    type: "numeric",
                    q: "For the model ŷ = 25 + 4x, what is the predicted value when x = 3?",
                    answer: 37,
                    tolerance: 0.001,
                    unit: "",
                    explanation: "25 + 4(3) = 25 + 12 = 37."
                },
                {
                    id: "reg2",
                    type: "mcq",
                    q: "An R² value of 0.70 means:",
                    choices: [
                        "The model explains 70% of the observed outcome variation.",
                        "The model is 70% likely to be causal.",
                        "The correlation must equal 0.70.",
                        "Every prediction is 70% accurate."
                    ],
                    answer: 0,
                    explanation: "R-squared represents the proportion of observed variation explained by the regression model."
                }
            ],
            ["Calculation", "Research", "Clinical"]
        ),

        // ====================================================================
        // MODULE 7
        // ====================================================================

        topic(
            "sensitivity-specificity",
            26,
            7,
            "Sensitivity, Specificity & Diagnostic Testing",
            "Learn how diagnostic tests classify disease and calculate sensitivity and specificity from 2×2 tables.",
            [
                "Define true positive and true negative.",
                "Define false positive and false negative.",
                "Calculate sensitivity.",
                "Calculate specificity.",
                "Explain screening versus confirmatory testing."
            ],
            [
                ["True positive", "Test positive when disease is truly present."],
                ["False negative", "Test negative despite disease being present."],
                ["True negative", "Test negative when disease is absent."],
                ["False positive", "Test positive despite disease being absent."],
                ["Sensitivity", "Probability of a positive test among people who truly have disease."],
                ["Specificity", "Probability of a negative test among people who truly do not have disease."]
            ],
            [
                "Sensitivity = TP ÷ (TP + FN)",
                "Specificity = TN ÷ (TN + FP)"
            ],
            [
                section(
                    "THE 2×2 TABLE",
                    "Compare Test Result With Truth",
                    [
                        "Diagnostic accuracy is often summarized by comparing test results with a reference standard.",
                        "Rows or columns divide people by true disease status and test result.",
                        "This creates true positive, false positive, true negative and false negative cells."
                    ]
                ),
                section(
                    "SENSITIVITY",
                    "Catch People Who Have the Disease",
                    [
                        "Sensitivity uses only people who truly have the disease in the denominator.",
                        "A highly sensitive test misses few diseased patients.",
                        "High sensitivity is valuable when missing disease would be dangerous."
                    ]
                ),
                section(
                    "SPECIFICITY",
                    "Correctly Exclude People Without Disease",
                    [
                        "Specificity uses people without disease in the denominator.",
                        "A highly specific test produces relatively few false positives.",
                        "Highly specific tests can be helpful when confirmation matters."
                    ]
                ),
                section(
                    "TRADEOFFS",
                    "Changing the Cutoff Can Shift Sensitivity and Specificity",
                    [
                        "Many tests use a numerical cutoff.",
                        "Lowering the threshold may detect more true cases but increase false positives.",
                        "Raising the threshold may improve specificity while reducing sensitivity."
                    ]
                )
            ],
            [
                worked(
                    "Sensitivity",
                    "Among 100 diseased patients, 90 test positive and 10 test negative. Find sensitivity.",
                    [
                        "TP = 90.",
                        "FN = 10.",
                        "Sensitivity = 90 ÷ (90 + 10).",
                        "Sensitivity = 0.90."
                    ],
                    "90%"
                ),
                worked(
                    "Specificity",
                    "Among 200 disease-free patients, 180 test negative and 20 test positive. Find specificity.",
                    [
                        "TN = 180.",
                        "FP = 20.",
                        "Specificity = 180 ÷ (180 + 20).",
                        "Specificity = 0.90."
                    ],
                    "90%"
                )
            ],
            [
                practice(
                    "TP = 72 and FN = 8. Calculate sensitivity.",
                    "90%.",
                    [
                        "72 ÷ (72 + 8) = 72 ÷ 80 = 0.90."
                    ]
                ),
                practice(
                    "TN = 95 and FP = 5. Calculate specificity.",
                    "95%.",
                    [
                        "95 ÷ (95 + 5) = 95 ÷ 100 = 0.95."
                    ]
                )
            ],
            {
                title: "Screening Test",
                scenario: "A screening program prioritizes minimizing missed cases of a serious treatable disease.",
                connection: "High sensitivity is especially valuable because it reduces false-negative results."
            },
            [
                "Sensitivity denominator includes diseased patients only.",
                "Specificity denominator includes nondiseased patients only.",
                "Sensitivity and specificity are not the same as predictive values."
            ],
            [
                "SENSITIVE = catches Sick.",
                "SPECIFIC = correctly excludes healthy."
            ],
            [
                "Sensitivity measures true-positive detection.",
                "Specificity measures true-negative detection.",
                "False negatives reduce sensitivity.",
                "False positives reduce specificity.",
                "Changing thresholds can create tradeoffs."
            ],
            [
                {
                    id: "sens1",
                    type: "numeric",
                    q: "A test has TP = 45 and FN = 5. What is sensitivity as a percentage?",
                    answer: 90,
                    tolerance: 0.01,
                    unit: "%",
                    explanation: "45 ÷ (45 + 5) = 45 ÷ 50 = 0.90 = 90%."
                },
                {
                    id: "sens2",
                    type: "numeric",
                    q: "A test has TN = 160 and FP = 40. What is specificity as a percentage?",
                    answer: 80,
                    tolerance: 0.01,
                    unit: "%",
                    explanation: "160 ÷ (160 + 40) = 160 ÷ 200 = 0.80 = 80%."
                }
            ],
            ["Healthcare", "Calculation", "High Yield"]
        ),

        topic(
            "predictive-values",
            27,
            7,
            "Positive & Negative Predictive Values",
            "Understand how disease prevalence changes the meaning of positive and negative test results.",
            [
                "Calculate PPV.",
                "Calculate NPV.",
                "Differentiate predictive values from sensitivity and specificity.",
                "Explain the effect of prevalence.",
                "Interpret predictive values clinically."
            ],
            [
                ["Positive predictive value", "Probability that disease is present given a positive test."],
                ["Negative predictive value", "Probability that disease is absent given a negative test."],
                ["Prevalence", "Proportion of the tested population that truly has the disease."],
                ["Post-test probability", "Updated probability of disease after test information is known."]
            ],
            [
                "PPV = TP ÷ (TP + FP)",
                "NPV = TN ÷ (TN + FN)"
            ],
            [
                section(
                    "PPV",
                    "How Much Should a Positive Result Be Trusted?",
                    [
                        "PPV asks what fraction of all positive tests are true positives.",
                        "Its denominator includes both true positives and false positives.",
                        "PPV depends strongly on disease prevalence in the tested population."
                    ]
                ),
                section(
                    "NPV",
                    "How Much Should a Negative Result Be Trusted?",
                    [
                        "NPV asks what fraction of negative tests are true negatives.",
                        "Its denominator includes true negatives and false negatives.",
                        "NPV often increases when disease prevalence is low."
                    ]
                ),
                section(
                    "PREVALENCE EFFECT",
                    "The Same Test Behaves Differently in Different Populations",
                    [
                        "When disease is rare, even a highly specific test may generate more false positives relative to true positives.",
                        "This lowers PPV.",
                        "When disease prevalence rises, PPV generally rises and NPV generally falls."
                    ]
                ),
                section(
                    "SCREENING CONTEXT",
                    "Who You Test Matters",
                    [
                        "A positive test in a high-risk symptomatic population may have a different meaning from the same result in a low-risk screening population.",
                        "Diagnostic reasoning therefore combines test characteristics with pretest probability."
                    ]
                )
            ],
            [
                worked(
                    "Positive Predictive Value",
                    "TP = 80 and FP = 20. Find PPV.",
                    [
                        "PPV = TP ÷ (TP + FP).",
                        "80 ÷ 100 = 0.80."
                    ],
                    "80%"
                )
            ],
            [
                practice(
                    "TN = 180 and FN = 20. Calculate NPV.",
                    "90%.",
                    [
                        "NPV = 180 ÷ (180 + 20).",
                        "180 ÷ 200 = 0.90."
                    ]
                ),
                practice(
                    "If disease prevalence becomes very low, what generally happens to PPV?",
                    "PPV tends to decrease.",
                    [
                        "There are fewer true cases available.",
                        "False positives can represent a larger fraction of all positive tests."
                    ]
                )
            ],
            {
                title: "Rare-Disease Screening",
                scenario: "A low-risk population is screened for a very rare disease.",
                connection: "Even a good test may have a modest positive predictive value because false positives can outnumber true positives when prevalence is very low."
            },
            [
                "PPV and NPV depend on prevalence.",
                "Sensitivity and specificity condition on true disease status.",
                "PPV conditions on a positive test result."
            ],
            [
                "PPV = positive test → do they really have disease?",
                "NPV = negative test → are they really disease free?"
            ],
            [
                "PPV measures truth among positive tests.",
                "NPV measures truth among negative tests.",
                "Predictive values depend on prevalence.",
                "Low prevalence tends to lower PPV.",
                "High prevalence tends to lower NPV."
            ],
            [
                {
                    id: "pv1",
                    type: "numeric",
                    q: "TP = 60 and FP = 40. What is PPV as a percentage?",
                    answer: 60,
                    tolerance: 0.01,
                    unit: "%",
                    explanation: "60 ÷ (60 + 40) = 60%."
                },
                {
                    id: "pv2",
                    type: "numeric",
                    q: "TN = 150 and FN = 10. What is NPV as a percentage?",
                    answer: 93.75,
                    tolerance: 0.01,
                    unit: "%",
                    explanation: "150 ÷ (150 + 10) = 150 ÷ 160 = 0.9375 = 93.75%."
                }
            ],
            ["Healthcare", "Calculation", "Clinical"]
        ),

        topic(
            "risk-ratio-odds-ratio",
            28,
            7,
            "Risk, Relative Risk & Odds Ratios",
            "Learn how epidemiologic studies compare disease risk between exposed and unexposed groups.",
            [
                "Calculate risk.",
                "Calculate relative risk.",
                "Interpret RR values.",
                "Define odds ratio.",
                "Differentiate risk and odds.",
                "Recognize common uses of RR and OR."
            ],
            [
                ["Risk", "Probability of an outcome over a specified period."],
                ["Relative risk", "Risk in exposed group divided by risk in unexposed group."],
                ["Risk ratio", "Another name for relative risk."],
                ["Odds", "Probability of event divided by probability of no event."],
                ["Odds ratio", "Ratio comparing odds between two groups."],
                ["Exposed group", "Group with a risk factor, treatment or exposure of interest."],
                ["Unexposed group", "Comparison group without the exposure."]
            ],
            [
                "Risk = events ÷ total",
                "RR = risk exposed ÷ risk unexposed",
                "Odds = p ÷ (1 − p)",
                "OR = odds exposed ÷ odds unexposed"
            ],
            [
                section(
                    "RISK",
                    "Probability of an Outcome",
                    [
                        "Risk is the number experiencing an outcome divided by the number initially at risk.",
                        "A risk of 0.20 means 20% experienced the event during the specified period."
                    ]
                ),
                section(
                    "RELATIVE RISK",
                    "Compare Two Risks",
                    [
                        "Relative risk divides the risk in an exposed or treatment group by the risk in a comparison group.",
                        "RR = 1 means equal risk.",
                        "RR > 1 means higher risk in the exposed group.",
                        "RR < 1 means lower risk in the exposed group."
                    ]
                ),
                section(
                    "ODDS",
                    "Event Relative to Non-Event",
                    [
                        "If probability is 0.20, odds are 0.20 ÷ 0.80 = 0.25.",
                        "Risk and odds are similar only when events are uncommon.",
                        "They should not be used interchangeably."
                    ]
                ),
                section(
                    "ODDS RATIO",
                    "Common in Case-Control Studies and Logistic Regression",
                    [
                        "Case-control studies begin by selecting participants based on outcome status, making direct risk calculation difficult.",
                        "Odds ratios are therefore commonly used.",
                        "When the outcome is rare, the odds ratio can approximate the relative risk."
                    ]
                )
            ],
            [
                worked(
                    "Relative Risk",
                    "In an exposed group, 20 of 100 develop infection. In an unexposed group, 10 of 100 develop infection. Calculate RR.",
                    [
                        "Risk exposed = 20 ÷ 100 = 0.20.",
                        "Risk unexposed = 10 ÷ 100 = 0.10.",
                        "RR = 0.20 ÷ 0.10 = 2."
                    ],
                    "RR = 2.0"
                )
            ],
            [
                practice(
                    "Risk in treatment group = 0.08 and risk in control group = 0.16. What is RR?",
                    "0.50.",
                    [
                        "0.08 ÷ 0.16 = 0.50.",
                        "The treatment group has half the risk."
                    ]
                ),
                practice(
                    "What does RR = 1 mean?",
                    "Equal risk in the two groups.",
                    [
                        "The numerator and denominator risks are equal."
                    ]
                )
            ],
            {
                title: "Fall-Prevention Program",
                scenario: "Fall risk is 4% with a prevention program and 8% with usual care.",
                connection: "RR = 0.04 ÷ 0.08 = 0.50, indicating the program group experienced half the risk."
            },
            [
                "RR = 2 does not mean risk increased by 2 percentage points.",
                "Risk and odds are different quantities.",
                "RR below 1 suggests lower risk in the numerator group."
            ],
            [
                "RR = exposed risk ÷ comparison risk.",
                "RR 1 = equal.",
                "RR above 1 = higher.",
                "RR below 1 = lower."
            ],
            [
                "Risk is event probability.",
                "Relative risk compares two risks.",
                "RR = 1 means no risk difference in ratio terms.",
                "Odds compare event with non-event.",
                "Odds ratios are common in case-control studies."
            ],
            [
                {
                    id: "rr1",
                    type: "numeric",
                    q: "Risk is 0.12 in an exposed group and 0.06 in an unexposed group. What is RR?",
                    answer: 2,
                    tolerance: 0.001,
                    unit: "",
                    explanation: "0.12 ÷ 0.06 = 2."
                },
                {
                    id: "rr2",
                    type: "mcq",
                    q: "A relative risk of 0.60 means:",
                    choices: [
                        "The numerator group has 60% of the risk of the comparison group.",
                        "The groups have identical risk.",
                        "Risk is impossible.",
                        "The event occurs in exactly 60 patients."
                    ],
                    answer: 0,
                    explanation: "RR compares risks as a ratio. 0.60 means the numerator group's risk is 60% of the denominator group's risk."
                }
            ],
            ["Epidemiology", "Calculation", "Clinical"]
        ),

        topic(
            "absolute-risk-nnt",
            29,
            7,
            "Absolute Risk Reduction & Number Needed to Treat",
            "Learn why absolute effects often communicate clinical benefit better than relative effects alone.",
            [
                "Calculate absolute risk reduction.",
                "Calculate relative risk reduction.",
                "Calculate number needed to treat.",
                "Explain the difference between relative and absolute effect.",
                "Interpret NNT clinically."
            ],
            [
                ["Absolute risk reduction", "Difference between control-event risk and treatment-event risk."],
                ["Relative risk reduction", "Absolute risk reduction divided by control risk."],
                ["Number needed to treat", "Number of patients who must receive treatment to prevent one additional adverse outcome."],
                ["Baseline risk", "Risk of the outcome in the comparison or untreated group."]
            ],
            [
                "ARR = control risk − treatment risk",
                "RRR = ARR ÷ control risk",
                "NNT = 1 ÷ ARR"
            ],
            [
                section(
                    "ABSOLUTE EFFECT",
                    "How Many Percentage Points Did Risk Change?",
                    [
                        "If risk falls from 10% to 5%, the absolute risk reduction is 5 percentage points.",
                        "Absolute effect reflects the actual change in event probability.",
                        "It is often easier to translate into clinical consequences."
                    ]
                ),
                section(
                    "RELATIVE EFFECT",
                    "Proportional Change",
                    [
                        "The same reduction from 10% to 5% represents a 50% relative risk reduction.",
                        "Relative numbers can sound dramatic even when absolute risk is small.",
                        "Good clinical interpretation reports both."
                    ]
                ),
                section(
                    "NNT",
                    "Translate Absolute Risk Into Patients",
                    [
                        "NNT is the reciprocal of the absolute risk reduction expressed as a decimal.",
                        "An ARR of 0.05 gives NNT = 20.",
                        "This means about 20 similar patients would need treatment to prevent one additional event over the study period."
                    ]
                ),
                section(
                    "BASELINE RISK",
                    "Benefit Depends on Who Is Treated",
                    [
                        "A treatment with the same relative effect produces larger absolute benefit in higher-risk populations.",
                        "Therefore NNT can differ between populations.",
                        "Always interpret NNT with its time horizon and outcome definition."
                    ]
                )
            ],
            [
                worked(
                    "ARR and NNT",
                    "Control risk = 20%; treatment risk = 10%. Calculate ARR and NNT.",
                    [
                        "ARR = 0.20 − 0.10 = 0.10.",
                        "NNT = 1 ÷ 0.10 = 10."
                    ],
                    "ARR = 10 percentage points; NNT = 10"
                )
            ],
            [
                practice(
                    "Control risk = 8%; treatment risk = 6%. What is ARR?",
                    "2 percentage points or 0.02.",
                    [
                        "0.08 − 0.06 = 0.02."
                    ]
                ),
                practice(
                    "If ARR = 0.04, what is NNT?",
                    "25.",
                    [
                        "1 ÷ 0.04 = 25."
                    ]
                )
            ],
            {
                title: "Preventing Readmission",
                scenario: "A program lowers readmission from 12% to 8%.",
                connection: "ARR is 4 percentage points and NNT is 25, meaning about 25 similar patients would need the program to prevent one additional readmission over the study interval."
            },
            [
                "Always convert percentages to decimals before calculating NNT.",
                "Relative reduction can look large when absolute benefit is small.",
                "NNT must be tied to a specific outcome and time period."
            ],
            [
                "ARR = subtract risks.",
                "NNT = 1 over ARR.",
                "Absolute effect tells the practical size."
            ],
            [
                "ARR measures absolute benefit.",
                "RRR measures proportional benefit.",
                "NNT is the reciprocal of ARR.",
                "Baseline risk affects absolute benefit.",
                "Clinical interpretation should include absolute effects."
            ],
            [
                {
                    id: "nnt1",
                    type: "numeric",
                    q: "Control risk is 0.18 and treatment risk is 0.12. What is ARR?",
                    answer: 0.06,
                    tolerance: 0.0001,
                    unit: "",
                    explanation: "0.18 − 0.12 = 0.06."
                },
                {
                    id: "nnt2",
                    type: "numeric",
                    q: "If ARR = 0.05, what is NNT?",
                    answer: 20,
                    tolerance: 0.001,
                    unit: "",
                    explanation: "1 ÷ 0.05 = 20."
                }
            ],
            ["Healthcare", "Calculation", "High Yield"]
        ),

        topic(
            "research-interpretation",
            30,
            7,
            "Reading Research Results & Evidence Tables",
            "Integrate confidence intervals, p-values, effect sizes, bias, power and clinical significance when reading healthcare research.",
            [
                "Interpret a research result in context.",
                "Evaluate confidence-interval width.",
                "Distinguish statistical significance from clinical importance.",
                "Recognize confounding and bias.",
                "Evaluate whether conclusions match study design.",
                "Use effect size and absolute risk measures."
            ],
            [
                ["Effect size", "Magnitude of a difference or association."],
                ["Precision", "Degree of uncertainty around an estimate, often reflected by confidence-interval width."],
                ["External validity", "Extent to which findings generalize beyond the study sample."],
                ["Internal validity", "Extent to which study findings accurately reflect the studied relationship."],
                ["Clinical significance", "Practical importance of a result for patient care."],
                ["Confounding", "Distortion by a third variable related to exposure and outcome."]
            ],
            [],
            [
                section(
                    "START WITH THE QUESTION",
                    "What Was the Study Trying to Determine?",
                    [
                        "Before reading the p-value, identify the population, exposure or intervention, comparison and outcome.",
                        "Determine whether the design was randomized, observational, cross-sectional, cohort or case-control.",
                        "The study design limits which conclusions are justified."
                    ]
                ),
                section(
                    "LOOK AT EFFECT SIZE",
                    "How Large Was the Difference?",
                    [
                        "A p-value does not tell you how large the effect is.",
                        "Read the mean difference, relative risk, odds ratio, absolute risk reduction or other effect measure.",
                        "Ask whether the magnitude would matter clinically."
                    ]
                ),
                section(
                    "READ THE CONFIDENCE INTERVAL",
                    "Estimate Plus Precision",
                    [
                        "A narrow confidence interval indicates relatively precise estimation.",
                        "A wide interval indicates substantial uncertainty.",
                        "For ratio measures such as RR or OR, intervals including 1 usually indicate the null value is plausible at the corresponding confidence level."
                    ]
                ),
                section(
                    "LOOK FOR BIAS AND CONFOUNDING",
                    "Statistical Adjustment Cannot Fix Every Design Problem",
                    [
                        "Ask how participants were selected.",
                        "Consider missing data, measurement quality and loss to follow-up.",
                        "In observational studies, unmeasured confounding may remain even after statistical adjustment."
                    ]
                ),
                section(
                    "STATISTICAL VS CLINICAL SIGNIFICANCE",
                    "Do Not Stop at p < 0.05",
                    [
                        "Large studies can identify tiny differences as statistically significant.",
                        "Small studies may miss clinically important effects because confidence intervals are wide.",
                        "Clinical decisions require effect size, uncertainty, harms, cost and patient preferences."
                    ]
                ),
                section(
                    "BUILD A COMPLETE CONCLUSION",
                    "Combine Design, Effect and Uncertainty",
                    [
                        "A strong interpretation should state what was observed, how large the effect was, how precise the estimate was and whether the design supports a causal claim.",
                        "Avoid saying a nonsignificant result proves no difference.",
                        "Avoid saying statistical significance automatically proves importance."
                    ]
                )
            ],
            [],
            [
                practice(
                    "A randomized trial reports RR = 0.75 with 95% CI 0.60 to 0.93. Does the interval include the null ratio value of 1?",
                    "No.",
                    [
                        "The interval runs from 0.60 to 0.93.",
                        "1 is outside the interval."
                    ]
                ),
                practice(
                    "A study reports a mean difference of 0.2 points on a 100-point scale with p < 0.001. What additional question should be asked?",
                    "Is the effect clinically meaningful?",
                    [
                        "Statistical significance does not describe magnitude.",
                        "A 0.2-point difference may be trivial despite a small p-value."
                    ]
                ),
                practice(
                    "An observational study finds an association. Can the result alone establish causality?",
                    "No.",
                    [
                        "Confounding and selection mechanisms may remain.",
                        "Causal claims require stronger evidence and design."
                    ]
                )
            ],
            {
                title: "Evidence-Based Nursing",
                scenario: "A nurse reads a trial reporting a statistically significant reduction in falls.",
                connection: "The p-value is only one part of interpretation. The absolute reduction, confidence interval, study quality, adverse effects and applicability to the nurse's patient population also matter."
            },
            [
                "A narrow confidence interval can still center on a clinically trivial effect.",
                "A nonsignificant p-value does not prove equivalence.",
                "Observational associations require cautious causal interpretation.",
                "Always examine effect size and uncertainty."
            ],
            [
                "READ RESULTS in this order: design → effect size → CI → p-value → clinical meaning.",
                "SMALL p is evidence, not magnitude.",
                "WIDE CI = uncertainty."
            ],
            [
                "Study design determines what can be concluded.",
                "Effect size describes magnitude.",
                "Confidence intervals describe precision.",
                "P-values address compatibility with the null.",
                "Bias and confounding affect validity.",
                "Statistical significance is not clinical significance.",
                "Evidence-based decisions integrate statistics with patient context."
            ],
            [
                {
                    id: "research1",
                    type: "mcq",
                    q: "A very large trial finds p < 0.001 for a treatment effect that changes symptom score by only 0.1 point on a 100-point scale. What is the most important additional question?",
                    choices: [
                        "Is the effect clinically meaningful?",
                        "Is p less than 1?",
                        "Is the sample size greater than zero?",
                        "Can all confidence intervals be ignored?"
                    ],
                    answer: 0,
                    explanation: "Statistical significance does not establish that the magnitude of benefit matters clinically."
                },
                {
                    id: "research2",
                    type: "mcq",
                    q: "A relative risk confidence interval is 0.80 to 1.20. Which statement is most appropriate?",
                    choices: [
                        "The interval includes the null value of 1.",
                        "The treatment is proven beneficial.",
                        "The risk ratio must equal zero.",
                        "The interval proves no effect."
                    ],
                    answer: 0,
                    explanation: "For ratio measures such as relative risk, 1 represents equal risk and is the null value."
                }
            ],
            ["Research", "Healthcare", "High Yield"]
        )
    ];

    // ========================================================================
    // MAPS / CONSTANTS
    // ========================================================================

    const TOPIC_COUNT = STAT_TOPICS.length;
    const TOPIC_MAP = {};

    STAT_TOPICS.forEach(function (item) {
        TOPIC_MAP[item.id] = item;
    });

    // ========================================================================
    // DASHBOARD ELEMENTS
    // ========================================================================

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

    const statisticsCard =
        document.querySelector(
            '.course-card[data-course="statistics"]'
        );

    const overallProgress =
        document.getElementById("overall-progress");

    const overallProgressBar =
        document.getElementById("overall-progress-bar");

    const topicsMastered =
        document.getElementById("topics-mastered");

    const questionsAnswered =
        document.getElementById("questions-answered");

    if (!footer || !statisticsCard) {
        return;
    }

    const statisticsDashboardButton =
        statisticsCard.querySelector(".course-button");

    if (statisticsDashboardButton) {
        statisticsDashboardButton.textContent =
            "Open Course →";
    }

    // ========================================================================
    // STORAGE
    // ========================================================================

    function storageFor(topicId) {

        const base =
            `nshSTAT_${topicId}`;

        return {
            read: `${base}_read`,
            review: `${base}_review`,
            practice: `${base}_practice`,
            marked: `${base}_marked`,
            score: `${base}_score`,
            passed: `${base}_passed`,
            attempts: `${base}_attempts`,
            missed: `${base}_missed`
        };
    }

    function getNumber(key) {
        return Number(
            localStorage.getItem(key)
        ) || 0;
    }

    function getBoolean(key) {
        return (
            localStorage.getItem(key) === "true"
        );
    }

    function getArray(key) {

        try {

            const value = JSON.parse(
                localStorage.getItem(key) || "[]"
            );

            return Array.isArray(value)
                ? value
                : [];

        } catch {

            return [];
        }
    }

    function saveArray(key, value) {
        localStorage.setItem(
            key,
            JSON.stringify(value)
        );
    }

    // ========================================================================
    // UTILITIES
    // ========================================================================

    function shuffle(array) {

        const copy = [...array];

        for (
            let i = copy.length - 1;
            i > 0;
            i--
        ) {

            const j =
                Math.floor(
                    Math.random() * (i + 1)
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
            behavior: "smooth"
        });
    }

    function escapeHTML(value) {

        return String(value ?? "")
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;");
    }

    // ========================================================================
    // STYLES
    // ========================================================================

    function createStyles() {

        if (
            document.getElementById(
                "statistics-full-course-styles"
            )
        ) {
            return;
        }

        const style =
            document.createElement("style");

        style.id =
            "statistics-full-course-styles";

        style.textContent = `

            .statistics-course-page .course-page-title {
                background:
                    linear-gradient(
                        135deg,
                        #eef2ff,
                        #ffffff
                    );
                border-color:#dbe4ff;
            }

            .statistics-course-page .course-page-icon {
                background:
                    linear-gradient(
                        135deg,
                        #dbeafe,
                        #e0e7ff
                    );
            }

            .stat-course-note {
                margin:20px 0;
                padding:20px;
                border-radius:18px;
                background:#f8fafc;
                border:1px solid #e5e7eb;
                color:#475467;
                line-height:1.75;
            }

            .stat-topic-stat-row {
                display:flex;
                gap:8px;
                flex-wrap:wrap;
                margin-top:12px;
            }

            .stat-topic-stat {
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

            .stat-objectives {
                margin-top:20px;
                padding:20px;
                border-radius:18px;
                background:#eef4ff;
                border:1px solid #c7d7fe;
            }

            .stat-objectives h3 {
                margin:0 0 12px;
                color:#344054;
            }

            .stat-objectives li {
                margin-bottom:8px;
                color:#475467;
                line-height:1.65;
                font-size:14px;
            }

            .stat-prose {
                display:flex;
                flex-direction:column;
                gap:15px;
            }

            .stat-prose p {
                margin:0;
                color:#475467;
                line-height:1.8;
                font-size:15px;
            }

            .stat-formula-box {
                margin-top:20px;
                padding:20px;
                border-radius:18px;
                background:#f8f5ff;
                border:1px solid #ddd6fe;
            }

            .stat-formula-title {
                font-size:12px;
                letter-spacing:1px;
                font-weight:900;
                color:#6d28d9;
                margin-bottom:12px;
            }

            .stat-formula {
                padding:12px 14px;
                margin-top:8px;
                border-radius:12px;
                background:#ffffff;
                border:1px solid #ede9fe;
                font-family:
                    "Courier New",
                    monospace;
                color:#4c1d95;
                font-weight:700;
                overflow-x:auto;
            }

            .stat-table-wrap {
                overflow-x:auto;
                margin-top:20px;
                border-radius:16px;
                border:1px solid #e5e7eb;
            }

            .stat-table {
                width:100%;
                border-collapse:collapse;
                min-width:520px;
            }

            .stat-table th,
            .stat-table td {
                padding:13px 15px;
                border-bottom:1px solid #e5e7eb;
                text-align:left;
                vertical-align:top;
                line-height:1.55;
                font-size:13px;
            }

            .stat-table th {
                background:#f8fafc;
                font-weight:800;
                color:#344054;
            }

            .stat-table td {
                color:#667085;
            }

            .stat-table tr:last-child td {
                border-bottom:none;
            }

            .stat-worked-grid {
                display:grid;
                grid-template-columns:
                    repeat(
                        auto-fit,
                        minmax(260px,1fr)
                    );
                gap:16px;
                margin-top:20px;
            }

            .stat-worked-card {
                padding:20px;
                border-radius:18px;
                border:1px solid #c7d2fe;
                background:#f8faff;
            }

            .stat-worked-card h3 {
                margin:0 0 10px;
                color:#3730a3;
            }

            .stat-worked-problem {
                margin-bottom:14px;
                color:#475467;
                line-height:1.6;
            }

            .stat-worked-card ol {
                padding-left:20px;
                color:#475467;
            }

            .stat-worked-card li {
                margin-bottom:8px;
                line-height:1.55;
            }

            .stat-worked-answer {
                margin-top:14px;
                padding:12px;
                border-radius:12px;
                background:#e0e7ff;
                color:#3730a3;
                font-weight:900;
            }

            .stat-memory-box {
                margin-top:20px;
                padding:20px;
                border-radius:18px;
                background:#f3f0ff;
                border:1px solid #ddd6fe;
            }

            .stat-memory-box h3 {
                margin:0 0 14px;
                color:#5b21b6;
            }

            .stat-memory-item {
                padding:10px 0;
                border-bottom:
                    1px solid
                    rgba(91,33,182,.12);
                color:#5b21b6;
                line-height:1.6;
            }

            .stat-memory-item:last-child {
                border-bottom:none;
            }

            .stat-traps {
                display:flex;
                flex-direction:column;
                gap:10px;
            }

            .stat-trap {
                padding:15px 17px;
                border-radius:14px;
                background:#fff7ed;
                border:1px solid #fed7aa;
                color:#9a3412;
                line-height:1.6;
            }

            .stat-practice-card {
                padding:22px;
                border:1px solid #e5e7eb;
                border-radius:18px;
                background:#ffffff;
            }

            .stat-practice-label {
                margin-bottom:8px;
                font-size:11px;
                font-weight:900;
                letter-spacing:1.2px;
                color:#4f46e5;
            }

            .stat-practice-question {
                font-size:19px;
                line-height:1.55;
                color:#172033;
            }

            .stat-practice-solution {
                margin-top:18px;
                padding:18px;
                border-radius:15px;
                background:#eef2ff;
                border:1px solid #c7d2fe;
            }

            .stat-practice-solution li {
                margin-bottom:8px;
                color:#475467;
                line-height:1.55;
            }

            .stat-practice-answer {
                margin-top:12px;
                font-weight:900;
                color:#4338ca;
            }

            .stat-numeric-wrap {
                margin-top:20px;
            }

            .stat-numeric-input {
                width:100%;
                padding:15px 16px;
                border:1px solid #d0d5dd;
                border-radius:12px;
                font-size:16px;
                outline:none;
                background:#ffffff;
            }

            .stat-numeric-input:focus {
                border-color:#6366f1;
                box-shadow:
                    0 0 0 3px
                    rgba(99,102,241,.12);
            }

            .stat-numeric-unit {
                margin-top:8px;
                color:#667085;
                font-size:12px;
            }

            body.dark-mode
            .statistics-course-page
            .course-page-title {
                background:
                    linear-gradient(
                        135deg,
                        #161b31,
                        #111827
                    );
                border-color:#333c74;
            }

            body.dark-mode
            .statistics-course-page
            .course-page-icon {
                background:#1d2444;
            }

            body.dark-mode
            .stat-course-note,
            body.dark-mode
            .stat-topic-stat {
                background:#151e2e;
                border-color:#263043;
                color:#cbd5e1;
            }

            body.dark-mode
            .stat-objectives {
                background:#151f3b;
                border-color:#33447d;
            }

            body.dark-mode
            .stat-objectives h3 {
                color:#e2e8f0;
            }

            body.dark-mode
            .stat-objectives li,
            body.dark-mode
            .stat-prose p,
            body.dark-mode
            .stat-worked-problem,
            body.dark-mode
            .stat-worked-card li,
            body.dark-mode
            .stat-practice-solution li {
                color:#cbd5e1;
            }

            body.dark-mode
            .stat-formula-box,
            body.dark-mode
            .stat-memory-box {
                background:#21193d;
                border-color:#4c3b75;
            }

            body.dark-mode
            .stat-formula {
                background:#17132a;
                border-color:#4c3b75;
                color:#d8b4fe;
            }

            body.dark-mode
            .stat-table-wrap,
            body.dark-mode
            .stat-table td,
            body.dark-mode
            .stat-table th {
                border-color:#263043;
            }

            body.dark-mode
            .stat-table th {
                background:#172033;
                color:#e2e8f0;
            }

            body.dark-mode
            .stat-table td {
                color:#aab4c5;
            }

            body.dark-mode
            .stat-worked-card {
                background:#151b31;
                border-color:#333c74;
            }

            body.dark-mode
            .stat-worked-card h3,
            body.dark-mode
            .stat-worked-answer {
                color:#c7d2fe;
            }

            body.dark-mode
            .stat-worked-answer {
                background:#23295b;
            }

            body.dark-mode
            .stat-memory-box h3,
            body.dark-mode
            .stat-memory-item {
                color:#d8b4fe;
            }

            body.dark-mode
            .stat-trap {
                background:#352111;
                border-color:#7c3d12;
                color:#fed7aa;
            }

            body.dark-mode
            .stat-practice-card {
                background:#111827;
                border-color:#263043;
            }

            body.dark-mode
            .stat-practice-question {
                color:#f1f5f9;
            }

            body.dark-mode
            .stat-practice-solution {
                background:#151b31;
                border-color:#333c74;
            }

            body.dark-mode
            .stat-numeric-input {
                background:#111827;
                border-color:#334155;
                color:#f8fafc;
            }

        `;

        document.head.appendChild(style);
    }

    createStyles();

    // ========================================================================
    // CREATE COURSE PAGE
    // ========================================================================

    const statisticsPage =
        document.createElement("section");

    statisticsPage.id =
        "statistics-page";

    statisticsPage.className =
        "course-page statistics-course-page hidden";

    footer.before(statisticsPage);

    // ========================================================================
    // CREATE LESSON PAGE
    // ========================================================================

    const statisticsLessonPage =
        document.createElement("section");

    statisticsLessonPage.id =
        "statistics-full-lesson-page";

    statisticsLessonPage.className =
        "lesson-page hidden";

    footer.before(statisticsLessonPage);

    // ========================================================================
    // QUESTION BANK CREATION
    // ========================================================================

    function buildTermQuestions(item) {

        const questions = [];

        item.facts.forEach(
            function (fact, index) {

                const otherIndices =
                    item.facts
                        .map((entry, i) => i)
                        .filter(i => i !== index);

                const distractors =
                    shuffle(otherIndices)
                        .slice(0, 3);

                let raw = [
                    {
                        text: fact[1],
                        correct: true
                    },
                    ...distractors.map(
                        function (i) {

                            return {
                                text:
                                    item.facts[i][1],
                                correct: false
                            };
                        }
                    )
                ];

                raw = shuffle(raw);

                questions.push({
                    id:
                        `${item.id}_definition_${index}`,
                    type: "mcq",
                    q:
                        `Which statement best describes <strong>${fact[0]}</strong>?`,
                    choices:
                        raw.map(
                            option => option.text
                        ),
                    answer:
                        raw.findIndex(
                            option =>
                                option.correct
                        ),
                    explanation:
                        `<strong>${fact[0]}:</strong> ${fact[1]}`,
                    topicId: item.id
                });

                raw = [
                    {
                        text: fact[0],
                        correct: true
                    },
                    ...distractors.map(
                        function (i) {

                            return {
                                text:
                                    item.facts[i][0],
                                correct: false
                            };
                        }
                    )
                ];

                raw = shuffle(raw);

                questions.push({
                    id:
                        `${item.id}_term_${index}`,
                    type: "mcq",
                    q:
                        `Which term matches this definition?<br><br><strong>${fact[1]}</strong>`,
                    choices:
                        raw.map(
                            option => option.text
                        ),
                    answer:
                        raw.findIndex(
                            option =>
                                option.correct
                        ),
                    explanation:
                        `The correct term is <strong>${fact[0]}</strong>.`,
                    topicId: item.id
                });
            }
        );

        return questions;
    }

    function buildQuestionBank(item) {

        const custom =
            (item.questions || []).map(
                function (question) {

                    return {
                        ...question,
                        topicId: item.id
                    };
                }
            );

        return [
            ...custom,
            ...buildTermQuestions(item)
        ];
    }

    function selectTopicQuestions(item) {

        const custom =
            shuffle(
                (item.questions || []).map(
                    function (question) {

                        return {
                            ...question,
                            topicId: item.id
                        };
                    }
                )
            );

        const generated =
            shuffle(
                buildTermQuestions(item)
            );

        const customTarget =
            Math.min(
                custom.length,
                Math.ceil(
                    TOPIC_QUIZ_LENGTH / 2
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

        return STAT_TOPICS.flatMap(
            item =>
                buildQuestionBank(item)
        );
    }

    function questionById(item, id) {

        return (
            buildQuestionBank(item)
                .find(
                    question =>
                        question.id === id
                ) || null
        );
    }

    // ========================================================================
    // COURSE PAGE
    // ========================================================================

    function topicCardHTML(item) {

        const storage =
            storageFor(item.id);

        const mastered =
            getNumber(storage.score) >=
            PASS_SCORE;

        return `

            <article
                class="topic-card statistics-topic-card"
                data-stat-topic="${item.id}"
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

                        ${item.tags.map(
                            tag =>
                                `<span>${tag}</span>`
                        ).join("")}

                    </div>

                    <div class="stat-topic-stat-row">

                        <span class="stat-topic-stat">
                            📖
                            ${item.sections.length}
                            sections
                        </span>

                        <span class="stat-topic-stat">
                            🧮
                            ${item.practice.length}
                            practice drills
                        </span>

                        <span class="stat-topic-stat">
                            📝
                            ${item.worked.length}
                            worked examples
                        </span>

                        <span class="stat-topic-stat">
                            ❓
                            ${
                                buildQuestionBank(item)
                                    .length
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
                function (module) {

                    const topics =
                        STAT_TOPICS.filter(
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
            ).join("");

        statisticsPage.innerHTML = `

            <div class="course-page-header">

                <button
                    id="stat-back-dashboard"
                    class="back-button"
                >
                    ← Dashboard
                </button>

                <div class="course-page-title">

                    <div class="course-page-icon">
                        📊
                    </div>

                    <div>

                        <p class="section-label">
                            COMPLETE COURSE
                        </p>

                        <h1>
                            Statistics for Nursing
                            & Health Sciences
                        </h1>

                        <p>
                            ${TOPIC_COUNT}
                            complete topics covering
                            descriptive statistics,
                            probability, normal distributions,
                            confidence intervals,
                            hypothesis testing,
                            diagnostic testing,
                            epidemiology and research interpretation.
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
                            id="stat-course-progress"
                        >
                            0
                        </span>%
                    </h2>

                </div>

                <div class="course-progress-large">

                    <div
                        id="stat-course-progress-bar"
                        class="course-progress-large-fill"
                    ></div>

                </div>

            </div>

            <div class="stat-course-note">

                <strong>
                    Statistics mastery:
                </strong>

                Learn the concept,
                study the worked examples,
                complete Quick Review,
                complete Calculation Practice,
                and score at least
                ${PASS_SCORE}%
                on the randomized mastery quiz.

                Questions you miss are automatically
                saved to your Statistics Weak Areas.

            </div>

            ${modulesHTML}

            <div class="final-practice-card">

                <div>

                    <p class="section-label">
                        FINAL REVIEW
                    </p>

                    <h2>
                        Statistics Mastery Center
                    </h2>

                    <p>
                        Review missed concepts,
                        practice calculations from the
                        entire course or complete the
                        ${FINAL_EXAM_LENGTH}-question
                        comprehensive exam.
                    </p>

                </div>

                <div class="final-practice-actions">

                    <button
                        id="stat-weak-button"
                    >
                        🎯 Weak Areas
                    </button>

                    <button
                        id="stat-practice-button"
                    >
                        🧮 Mixed Practice
                    </button>

                    <button
                        id="stat-exam-button"
                    >
                        🏆 Final Mastery Exam
                    </button>

                </div>

            </div>
        `;

        document
            .getElementById(
                "stat-back-dashboard"
            )
            .addEventListener(
                "click",
                showDashboard
            );

        document
            .querySelectorAll(
                ".statistics-topic-card"
            )
            .forEach(
                function (card) {

                    card.addEventListener(
                        "click",
                        function () {

                            showTopic(
                                card.dataset.statTopic
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
                                card.dataset.statTopic
                            );
                        }
                    );
                }
            );

        document
            .getElementById(
                "stat-weak-button"
            )
            .addEventListener(
                "click",
                startWeakPractice
            );

        document
            .getElementById(
                "stat-practice-button"
            )
            .addEventListener(
                "click",
                startMixedPractice
            );

        document
            .getElementById(
                "stat-exam-button"
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
            function (element) {

                if (element) {
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

    function showStatisticsCourse() {

        hideMainViews();

        statisticsPage.classList.remove(
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
            function (element) {

                if (element) {
                    element.classList.remove(
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
        function (event) {

            const card =
                event.target.closest(
                    '.course-card[data-course="statistics"]'
                );

            if (!card) {
                return;
            }

            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();

            showStatisticsCourse();
        },
        true
    );

    // ========================================================================
    // RENDERING HELPERS
    // ========================================================================

    function renderParagraphs(paragraphs) {

        return `

            <div class="stat-prose">

                ${
                    paragraphs.map(
                        paragraph =>
                            `<p>${paragraph}</p>`
                    ).join("")
                }

            </div>
        `;
    }

    function renderFacts(facts) {

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

    function renderFormulas(formulas) {

        if (
            !formulas ||
            !formulas.length
        ) {
            return "";
        }

        return `

            <div class="stat-formula-box">

                <div class="stat-formula-title">
                    🧮 FORMULAS
                </div>

                ${
                    formulas.map(
                        formula =>
                            `
                                <div class="stat-formula">
                                    ${formula}
                                </div>
                            `
                    ).join("")
                }

            </div>
        `;
    }

    function renderTable(table) {

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

            <div class="stat-table-wrap">

                <table class="stat-table">

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
                                function (row) {

                                    return `

                                        <tr>

                                            ${
                                                row.map(
                                                    cell =>
                                                        `<td>${cell}</td>`
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

    function renderWorkedExamples(
        examples
    ) {

        if (
            !examples ||
            !examples.length
        ) {
            return `

                <div class="stat-course-note">
                    This topic is primarily conceptual,
                    so no extended arithmetic example
                    is required here.
                </div>
            `;
        }

        return `

            <div class="stat-worked-grid">

                ${
                    examples.map(
                        example =>
                            `

                                <div class="stat-worked-card">

                                    <h3>
                                        ${example.title}
                                    </h3>

                                    <div class="stat-worked-problem">
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

                                    <div class="stat-worked-answer">
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

    function renderMemory(memory) {

        return `

            <div class="stat-memory-box">

                <h3>
                    🧠 Memory Tricks
                </h3>

                ${
                    memory.map(
                        item =>
                            `
                                <div class="stat-memory-item">
                                    ${item}
                                </div>
                            `
                    ).join("")
                }

            </div>
        `;
    }

    function renderChecklist(items) {

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

    function renderClinical(clinical) {

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
                        Statistics Connection
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
                id="stat-detail-${item.id}-${index}"
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
                            part.paragraphs || []
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
    // LESSON
    // ========================================================================

    let currentTopic = null;
    let lessonObserver = null;

    function showTopic(topicId) {

        const item =
            TOPIC_MAP[topicId];

        if (!item) {
            return;
        }

        currentTopic = item;

        hideMainViews();

        renderLesson(item);

        statisticsLessonPage
            .classList.remove(
                "hidden"
            );

        updateLessonProgress(item);
        observeLesson(item);

        scrollTopSmooth();
    }

    function renderLesson(item) {

        const navigation =
            item.sections.map(
                function (part, index) {

                    return `

                        <a
                            href="#stat-detail-${item.id}-${index}"
                        >
                            ${part.label}
                        </a>
                    `;
                }
            ).join("");

        statisticsLessonPage.innerHTML = `

            <div class="lesson-top-bar">

                <button
                    id="stat-back-course"
                    class="back-button"
                >
                    ← Statistics
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
                        STATISTICS FOR
                        NURSING & HEALTH SCIENCES
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
                            🧮
                            Calculation Practice
                        </span>

                        <span>
                            🩺
                            Healthcare Examples
                        </span>

                        <span>
                            🧠
                            Memory Tricks
                        </span>

                        <span>
                            ❓
                            Mastery Quiz
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

                <a href="#stat-overview">
                    Objectives
                </a>

                <a href="#stat-terminology">
                    Terminology
                </a>

                ${navigation}

                <a href="#stat-worked">
                    Worked Examples
                </a>

                <a href="#stat-clinical">
                    Healthcare
                </a>

                <a href="#stat-memory">
                    Memory
                </a>

                <a href="#stat-traps">
                    Exam Traps
                </a>

                <a href="#stat-summary">
                    Summary
                </a>

            </nav>

            <div class="lesson-layout">

                <article class="lesson-content">

                    <section
                        id="stat-overview"
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
                                    "Statistics should be understood as a reasoning process, not only a collection of formulas. Focus on what each number means, why a method is used and how the result changes a healthcare or research conclusion."
                                ])
                            }

                            <div class="stat-objectives">

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
                        id="stat-terminology"
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
                        id="stat-worked"
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
                        id="stat-clinical"
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
                                Statistics in Patient Care
                            </h2>

                            ${
                                renderClinical(
                                    item.clinical
                                )
                            }

                        </div>

                    </section>

                    <section
                        id="stat-memory"
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
                                Remember the Important Rules
                            </h2>

                            ${
                                renderMemory(
                                    item.memory
                                )
                            }

                        </div>

                    </section>

                    <section
                        id="stat-traps"
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

                            <div class="stat-traps">

                                ${
                                    item.traps.map(
                                        trap =>
                                            `

                                                <div class="stat-trap">

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
                        id="stat-summary"
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
                                        complete Calculation Practice,
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
                                Recall the terminology,
                                work through the calculations
                                without looking at the solution,
                                then complete the randomized quiz.
                            </p>

                        </div>

                        <div class="lesson-action-buttons">

                            <button
                                id="stat-review-button"
                                class="secondary-lesson-button"
                            >
                                🧠 Quick Review
                            </button>

                            <button
                                id="stat-calc-button"
                                class="secondary-lesson-button"
                            >
                                🧮 Calculation Practice
                            </button>

                            <button
                                id="stat-topic-quiz-button"
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
                                id="stat-topic-progress"
                            >
                                0
                            </span>%
                        </div>

                        <div class="sidebar-progress-bar">

                            <div
                                id="stat-topic-progress-fill"
                                class="sidebar-progress-fill"
                            ></div>

                        </div>

                    </div>

                    <div class="sidebar-card">

                        <p class="sidebar-label">
                            MASTERY CHECKLIST
                        </p>

                        <div
                            id="stat-topic-checklist"
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
                                Calculation Practice
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
                                id="stat-best-score"
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
                                buildQuestionBank(item)
                                    .length
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
                                Statistics Strategy
                            </strong>

                            <p>
                                Ask four things:
                                What type of variable?
                                What question is being asked?
                                Which formula or test fits?
                                What does the answer mean?
                            </p>

                        </div>

                    </div>

                </aside>

            </div>
        `;

        document
            .getElementById(
                "stat-back-course"
            )
            .addEventListener(
                "click",
                showStatisticsCourse
            );

        document
            .getElementById(
                "stat-review-button"
            )
            .addEventListener(
                "click",
                function () {

                    startQuickReview(item);
                }
            );

        document
            .getElementById(
                "stat-calc-button"
            )
            .addEventListener(
                "click",
                function () {

                    startCalculationPractice(
                        item
                    );
                }
            );

        document
            .getElementById(
                "stat-topic-quiz-button"
            )
            .addEventListener(
                "click",
                function () {

                    startTopicQuiz(item);
                }
            );
    }

    // ========================================================================
    // READ TRACKING
    // ========================================================================

    function observeLesson(item) {

        if (lessonObserver) {
            lessonObserver.disconnect();
        }

        const summary =
            document.getElementById(
                "stat-summary"
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
                                !statisticsLessonPage
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
                    threshold: 0.25
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
            storageFor(item.id);

        let progress = 0;

        if (
            getBoolean(storage.read)
        ) {
            progress += 20;
        }

        if (
            getBoolean(storage.review)
        ) {
            progress += 20;
        }

        if (
            getBoolean(storage.practice)
        ) {
            progress += 20;
        }

        if (
            getBoolean(storage.passed)
        ) {
            progress += 40;
        }

        return progress;
    }

    function isMastered(item) {

        return (
            getNumber(
                storageFor(item.id).score
            ) >= PASS_SCORE
        );
    }

    function setChecklist(
        items,
        index,
        complete
    ) {

        if (!items[index]) {
            return;
        }

        const icon =
            items[index]
                .querySelector("span");

        if (!icon) {
            return;
        }

        icon.textContent =
            complete ? "✓" : "○";

        icon.style.color =
            complete
                ? "#16a34a"
                : "";

        items[index].style.fontWeight =
            complete
                ? "700"
                : "";
    }

    function updateLessonProgress(
        item
    ) {

        const storage =
            storageFor(item.id);

        const progress =
            calculateTopicProgress(item);

        const text =
            document.getElementById(
                "stat-topic-progress"
            );

        const fill =
            document.getElementById(
                "stat-topic-progress-fill"
            );

        const best =
            document.getElementById(
                "stat-best-score"
            );

        if (text) {
            text.textContent =
                progress;
        }

        if (fill) {
            fill.style.width =
                `${progress}%`;
        }

        if (best) {
            best.textContent =
                getNumber(
                    storage.score
                );
        }

        const items =
            document.querySelectorAll(
                "#stat-topic-checklist > div"
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

        return STAT_TOPICS
            .filter(isMastered)
            .length;
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

        const percent =
            getCoursePercent();

        const courseText =
            document.getElementById(
                "stat-course-progress"
            );

        const courseBar =
            document.getElementById(
                "stat-course-progress-bar"
            );

        if (courseText) {
            courseText.textContent =
                percent;
        }

        if (courseBar) {
            courseBar.style.width =
                `${percent}%`;
        }

        document
            .querySelectorAll(
                ".statistics-topic-card"
            )
            .forEach(
                function (card) {

                    const item =
                        TOPIC_MAP[
                            card.dataset.statTopic
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
                        isMastered(item);

                    const topicProgress =
                        calculateTopicProgress(
                            item
                        );

                    if (status) {

                        status.textContent =
                            mastered
                                ? "✓"
                                : item.number;
                    }

                    if (button) {

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
            statisticsCard.querySelectorAll(
                ".course-progress span"
            );

        if (spans.length > 1) {

            spans[1].textContent =
                `${percent}%`;
        }

        const fill =
            statisticsCard.querySelector(
                ".course-progress-fill"
            );

        if (fill) {

            fill.style.width =
                `${percent}%`;
        }

        if (
            currentTopic &&
            !statisticsLessonPage
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

        if (!card) {
            return 0;
        }

        const spans =
            card.querySelectorAll(
                ".course-progress span"
            );

        if (
            spans.length < 2
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
            "statistics"
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
                        total + value,
                    0
                ) /
                builtCourses.length
            );

        if (overallProgress) {

            overallProgress.textContent =
                average;
        }

        if (overallProgressBar) {

            overallProgressBar.style.width =
                `${average}%`;
        }

        if (topicsMastered) {

            const mastered =
                Array.from(
                    document.querySelectorAll(
                        ".course-page .topic-status"
                    )
                ).filter(
                    function (status) {

                        return (
                            status
                                .textContent
                                .trim() === "✓"
                        );
                    }
                ).length;

            topicsMastered.textContent =
                mastered;
        }

        if (questionsAnswered) {

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
            '.course-card[data-course="statistics"]'
        )
        .forEach(
            function (card) {

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
                        subtree: true,
                        childList: true,
                        characterData: true
                    }
                );
            }
        );

    // ========================================================================
    // MODAL
    // ========================================================================

    const overlay =
        document.createElement("div");

    overlay.id =
        "statistics-study-overlay";

    overlay.className =
        "study-overlay hidden";

    overlay.innerHTML = `

        <div class="study-modal">

            <div class="study-modal-header">

                <div>

                    <p
                        id="stat-modal-label"
                        class="study-modal-label"
                    ></p>

                    <h2
                        id="stat-modal-title"
                    ></h2>

                </div>

                <button
                    id="stat-modal-close"
                    class="study-modal-close"
                >
                    ×
                </button>

            </div>

            <div
                id="stat-modal-content"
            ></div>

        </div>
    `;

    document.body.appendChild(
        overlay
    );

    const modalLabel =
        document.getElementById(
            "stat-modal-label"
        );

    const modalTitle =
        document.getElementById(
            "stat-modal-title"
        );

    const modalContent =
        document.getElementById(
            "stat-modal-content"
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

    document
        .getElementById(
            "stat-modal-close"
        )
        .addEventListener(
            "click",
            closeModal
        );

    overlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target === overlay
            ) {
                closeModal();
            }
        }
    );

    // ========================================================================
    // QUICK REVIEW
    // ========================================================================

    let reviewTopic = null;
    let reviewOrder = [];
    let reviewIndex = 0;
    let reviewRevealed = false;

    function startQuickReview(
        item
    ) {

        reviewTopic = item;

        reviewOrder =
            shuffle(
                item.facts.map(
                    (
                        fact,
                        index
                    ) => index
                )
            );

        reviewIndex = 0;
        reviewRevealed = false;

        modalLabel.textContent =
            `STATISTICS • TOPIC ${item.number}`;

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
                        reviewIndex + 1
                    ) /
                    reviewOrder.length
                ) * 100
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
                                    Explain the concept
                                    in your own words before
                                    moving to the next card.
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
                            id="stat-review-prev"
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
                            id="stat-review-mark"
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
                                        id="stat-review-next"
                                        class="study-button primary"
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
                                        id="stat-review-reveal"
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
                "stat-review-prev"
            );

        const mark =
            document.getElementById(
                "stat-review-mark"
            );

        const reveal =
            document.getElementById(
                "stat-review-reveal"
            );

        const next =
            document.getElementById(
                "stat-review-next"
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

                    const array =
                        getArray(
                            storage.marked
                        );

                    const position =
                        array.indexOf(
                            factIndex
                        );

                    if (
                        position >= 0
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
                                    id="stat-review-done"
                                    class="study-button primary"
                                >
                                    Return to Lesson
                                </button>

                            </div>
                        `;

                        document
                            .getElementById(
                                "stat-review-done"
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
    // CALCULATION PRACTICE
    // ========================================================================

    let practiceTopic = null;
    let practiceOrder = [];
    let practiceIndex = 0;
    let practiceRevealed = false;

    function startCalculationPractice(
        item
    ) {

        practiceTopic = item;

        practiceOrder =
            shuffle(
                item.practice.map(
                    (
                        problem,
                        index
                    ) => index
                )
            );

        practiceIndex = 0;
        practiceRevealed = false;

        modalLabel.textContent =
            `STATISTICS • TOPIC ${item.number}`;

        modalTitle.textContent =
            "Calculation & Application Practice";

        openModal();

        renderCalculationPractice();
    }

    function renderCalculationPractice() {

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
                        practiceIndex + 1
                    ) /
                    practiceOrder.length
                ) * 100
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

            <div class="stat-practice-card">

                <p class="stat-practice-label">
                    CALCULATION / APPLICATION
                </p>

                <div class="stat-practice-question">
                    ${problem.prompt}
                </div>

                ${
                    practiceRevealed
                        ? `

                            <div class="stat-practice-solution">

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

                                <div class="stat-practice-answer">
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
                                Solve the problem yourself
                                before revealing the answer.
                                Write the formula first,
                                substitute the numbers,
                                then interpret the result.
                            </p>
                        `
                }

            </div>

            <div class="study-actions">

                <div class="study-actions-group">

                    <button
                        id="stat-practice-prev"
                        class="study-button"
                        ${
                            practiceIndex === 0
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
                                    id="stat-practice-next"
                                    class="study-button primary"
                                >
                                    ${
                                        practiceIndex ===
                                        practiceOrder.length - 1
                                            ? "Complete Practice ✓"
                                            : "Next Problem →"
                                    }
                                </button>
                            `
                            : `

                                <button
                                    id="stat-practice-reveal"
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
                "stat-practice-prev"
            );

        const reveal =
            document.getElementById(
                "stat-practice-reveal"
            );

        const next =
            document.getElementById(
                "stat-practice-next"
            );

        if (previous) {

            previous.addEventListener(
                "click",
                function () {

                    if (
                        practiceIndex > 0
                    ) {

                        practiceIndex--;
                        practiceRevealed =
                            false;

                        renderCalculationPractice();
                    }
                }
            );
        }

        if (reveal) {

            reveal.addEventListener(
                "click",
                function () {

                    practiceRevealed =
                        true;

                    renderCalculationPractice();
                }
            );
        }

        if (next) {

            next.addEventListener(
                "click",
                function () {

                    if (
                        practiceIndex <
                        practiceOrder.length - 1
                    ) {

                        practiceIndex++;
                        practiceRevealed =
                            false;

                        renderCalculationPractice();

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
                                    calculations and
                                    application problems.
                                </p>

                                <div
                                    class="study-actions-group"
                                    style="
                                        justify-content:center;
                                        flex-wrap:wrap;
                                    "
                                >

                                    <button
                                        id="stat-practice-quiz-now"
                                        class="study-button primary"
                                    >
                                        Start Mastery Quiz →
                                    </button>

                                    <button
                                        id="stat-practice-done"
                                        class="study-button"
                                    >
                                        Return to Lesson
                                    </button>

                                </div>

                            </div>
                        `;

                        document
                            .getElementById(
                                "stat-practice-quiz-now"
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
                                "stat-practice-done"
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

    let quizQuestions = [];
    let quizIndex = 0;
    let quizCorrect = 0;
    let quizSelected = null;
    let quizNumeric = "";
    let quizChecked = false;
    let quizMode = "topic";
    let quizTopic = null;

    // ========================================================================
    // START QUIZZES
    // ========================================================================

    function startTopicQuiz(item) {

        quizMode = "topic";
        quizTopic = item;

        quizQuestions =
            selectTopicQuestions(
                item
            );

        beginQuiz(
            `STATISTICS • TOPIC ${item.number}`,
            `${item.title} Mastery Quiz`
        );
    }

    function startMixedPractice() {

        quizMode = "practice";
        quizTopic = null;

        quizQuestions =
            shuffle(
                allQuestions()
            ).slice(
                0,
                MIXED_PRACTICE_LENGTH
            );

        beginQuiz(
            "STATISTICS • MIXED PRACTICE",
            "Statistics Mixed Practice"
        );
    }

    function startFinalExam() {

        quizMode = "final";
        quizTopic = null;

        const guaranteed =
            STAT_TOPICS.map(
                function (item) {

                    const custom =
                        (item.questions || [])
                            .map(
                                function (
                                    question
                                ) {

                                    return {
                                        ...question,
                                        topicId:
                                            item.id
                                    };
                                }
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
                        function (
                            question
                        ) {

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
            "STATISTICS • COMPREHENSIVE EXAM",
            "Statistics Final Mastery Exam"
        );
    }

    // ========================================================================
    // WEAK AREAS
    // ========================================================================

    function getWeakQuestions() {

        const weak = [];

        STAT_TOPICS.forEach(
            function (item) {

                const ids =
                    getArray(
                        storageFor(
                            item.id
                        ).missed
                    );

                ids.forEach(
                    function (id) {

                        const question =
                            questionById(
                                item,
                                id
                            );

                        if (question) {
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

        if (!weak.length) {

            modalLabel.textContent =
                "STATISTICS • SMART REVIEW";

            modalTitle.textContent =
                "Weak Areas";

            modalContent.innerHTML = `

                <div class="results">

                    <div class="results-icon">
                        🎯
                    </div>

                    <h2>
                        No Statistics weak questions yet
                    </h2>

                    <p class="results-message">
                        Questions you miss during
                        Statistics quizzes will
                        automatically appear here.
                    </p>

                    <button
                        id="stat-no-weak-close"
                        class="study-button primary"
                    >
                        Got It
                    </button>

                </div>
            `;

            openModal();

            document
                .getElementById(
                    "stat-no-weak-close"
                )
                .addEventListener(
                    "click",
                    closeModal
                );

            return;
        }

        quizMode = "weak";
        quizTopic = null;

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
            "STATISTICS • SMART REVIEW",
            "Study My Statistics Weak Areas"
        );
    }

    // ========================================================================
    // QUIZ ENGINE
    // ========================================================================

    function beginQuiz(
        label,
        title
    ) {

        quizIndex = 0;
        quizCorrect = 0;
        quizSelected = null;
        quizNumeric = "";
        quizChecked = false;

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
                ).trim() !== ""
            );
        }

        return (
            quizSelected !== null
        );
    }

    function numericCorrect(
        question,
        value
    ) {

        const entered =
            Number(
                String(value)
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
            ) <= tolerance
        );
    }

    function renderQuiz() {

        const question =
            quizQuestions[
                quizIndex
            ];

        if (!question) {
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
                        quizIndex + 1
                    ) /
                    quizQuestions.length
                ) * 100
            );

        const letters = [
            "A",
            "B",
            "C",
            "D",
            "E"
        ];

        let answerArea = "";

        if (
            question.type ===
            "numeric"
        ) {

            answerArea = `

                <div class="stat-numeric-wrap">

                    <input
                        id="stat-numeric-answer"
                        class="stat-numeric-input"
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

                                <div class="stat-numeric-unit">
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
                                        data-stat-answer="${index}"
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

        let feedback = "";

        if (quizChecked) {

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
                            id="stat-quiz-exit"
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
                                        id="stat-quiz-next"
                                        class="study-button primary"
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
                                        id="stat-quiz-check"
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
                "[data-stat-answer]"
            )
            .forEach(
                function (button) {

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
                                        .statAnswer
                                );

                            renderQuiz();
                        }
                    );
                }
            );

        const numericInput =
            document.getElementById(
                "stat-numeric-answer"
            );

        if (numericInput) {

            numericInput.addEventListener(
                "input",
                function () {

                    quizNumeric =
                        numericInput.value;

                    const check =
                        document
                            .getElementById(
                                "stat-quiz-check"
                            );

                    if (check) {

                        check.disabled =
                            !String(
                                quizNumeric
                            ).trim();
                    }
                }
            );

            numericInput.addEventListener(
                "keydown",
                function (event) {

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
                "stat-quiz-check"
            );

        const next =
            document.getElementById(
                "stat-quiz-next"
            );

        const exit =
            document.getElementById(
                "stat-quiz-exit"
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

                        quizNumeric = "";
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

    // ========================================================================
    // WEAK-AREA STORAGE
    // ========================================================================

    function addWeak(question) {

        const item =
            TOPIC_MAP[
                question.topicId
            ];

        if (!item) {
            return;
        }

        const key =
            storageFor(
                item.id
            ).missed;

        const ids =
            getArray(key);

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

        if (!item) {
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

        localStorage.setItem(
            SHARED_QUESTIONS_KEY,
            getNumber(
                SHARED_QUESTIONS_KEY
            ) + 1
        );

        quizChecked = true;

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
            ) + 1
        );

        if (
            score >= PASS_SCORE
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
                ) * 100
            );

        if (
            quizMode === "topic" &&
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

    function showResults(score) {

        const incorrect =
            quizQuestions.length -
            quizCorrect;

        const passed =
            score >= PASS_SCORE;

        let title =
            "Practice Complete";

        let message =
            "Missed questions were automatically saved to Statistics Weak Areas.";

        let icon =
            "📊";

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
                    : `You need at least ${PASS_SCORE}% to master this topic. Review the calculations and weak concepts, then try a new randomized quiz.`;

            icon =
                passed
                    ? "🏆"
                    : "📚";

        } else if (
            quizMode ===
            "final"
        ) {

            title =
                "Statistics Final Mastery Exam Complete";

            message =
                `You completed ${quizQuestions.length} questions from the complete Statistics course.`;

            icon =
                "🏆";

        } else if (
            quizMode ===
            "weak"
        ) {

            title =
                "Weak-Area Review Complete";

            message =
                "Questions answered correctly were removed from your Statistics weak-area list.";

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
                                    ? `${
                                        getNumber(
                                            storageFor(
                                                quizTopic.id
                                            ).score
                                        )
                                    }%`
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
                                    id="stat-result-retake"
                                    class="study-button"
                                >
                                    🔄 New Quiz
                                </button>

                                <button
                                    id="stat-result-practice"
                                    class="study-button"
                                >
                                    🧮 Practice
                                </button>

                                <button
                                    id="stat-result-review"
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
                                    id="stat-result-weak"
                                    class="study-button"
                                >
                                    🎯 Weak Areas
                                </button>
                            `
                            : ""
                    }

                    <button
                        id="stat-result-finish"
                        class="study-button primary"
                    >
                        Finish
                    </button>

                </div>

            </div>
        `;

        const retake =
            document.getElementById(
                "stat-result-retake"
            );

        const practice =
            document.getElementById(
                "stat-result-practice"
            );

        const review =
            document.getElementById(
                "stat-result-review"
            );

        const weak =
            document.getElementById(
                "stat-result-weak"
            );

        const finish =
            document.getElementById(
                "stat-result-finish"
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

        if (practice) {

            practice.addEventListener(
                "click",
                function () {

                    startCalculationPractice(
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

    // ========================================================================
    // ESCAPE KEY
    // ========================================================================

    document.addEventListener(
        "keydown",
        function (event) {

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