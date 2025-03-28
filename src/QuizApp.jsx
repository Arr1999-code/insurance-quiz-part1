import React, { useState } from "react";

const PASSWORD = "insur101";

const originalQuizData = [
  {
    question: "A policyowner suffers an injury that renders him incapable of performing one or more important job duties. Any decrease in income resulting from this injury would make him eligible for benefits under which provision?",
    options: [
      "Partial disability",
      "Non Disabling injury",
      "Presumptive disability",
      "Flat amount disability"
    ],
    answer: "Partial disability"
  },
  {
    question: "Medicaid is a government-funded program designed to provide health care to",
    options: [
      "all individuals over the age of 65.",
      "All individuals who carry Medicare supplemental insurance.",
      "Anyone who does not have a proper caregiver.",
      "Low income state resident."
    ],
    answer: "Low income state resident."
  },
  {
    question: "Group Disability Income Insurance usually involves",
    options: [
      "Higher premiums than individual disability policies.",
      "Providing benefits for nonoccupational illnesses and injuries.",
      "A requirement that all employees participate",
      "Workers who are individually uninsurable because of their high-risk occupations"
    ],
    answer: "Providing benefits for nonoccupational illnesses and injuries."
  },
  {
    question: "Utilization review includes all of the following EXCEPT",
    options: [
      "Projected date for release of the patient",
      "Continues analysis of accident-prone individuals",
      "Cost-effective ways of handling patients with catastrophic illnesses.",
      "Intermittent analysis of the reasons for the patient to remain in the healthcare facility"
    ],
    answer: "Projected date for release of the patient"
  },
  {
    question: "Which of the following types of long-term care benefits would be best suited for a senior citizen who needs supervision, social, and recreational services?",
    options: [
      "Respite care",
      "Adult Day care",
      "Home health care",
      "Nursing home care"
    ],
    answer: "Adult Day care"
  },
  {
    question: "If agent Sue completes an application for an insurance policy on behalf of Phil, and the company agrees to insure him, which party made the offer?",
    options: [
      "Sue, when she made the initial appointment",
      "Phil, when he completed the application",
      "The company, when it issued the policy",
      "Phil, when he received the policy"
    ],
    answer: "The company, when it issued the policy"
  },
  {
    question: "When a buyer is considering a long-term care policy, they are encouraged to review carefully all policy",
    options: [
      "Limitations.",
      "Facilities.",
      "Carriers.",
      "Agents."
    ],
    answer: "Limitations."
  },
   {
    question: "According to the Fair Credit Reporting Act, an insurer does NOT need to",
    options: [
      "Inform the applicant that an investigation is being conducted",
      "Discuss any credit history inconsistencies with the application",
      "Inform the applicant about the scope of an investigation",
      "Notify the applicant if an application is denied"
    ],
    answer: "Discuss any credit history inconsistencies with the application"
  },
  {
    question: "Which of the following is NOT considered advertising?",
    options: [
      "A policy illustration",
      "An AM Best company rating",
      "A direct mailing by an insurer",
      "An agent’s oral sales presentation"
    ],
    answer: "An AM Best company rating"
  },
  {
    question: "How many days after an accident and health policy has been reinstated is there coverage for sickness?",
    options: [
      "1 day",
      "3 days",
      "5 days",
      "10 days"
    ],
    answer: "10 days"
  },
  {
    question: "A Key Person Disability Income Policy pays benefits to the",
    options: [
      "Spouse",
      "Dependent",
      "Employee",
      "Employer"
    ],
    answer: "Employer"
  },
  {
    question: "A 65-year-old employee who works for an employer with 24 employees is disabled on the job. The employee has fully recovered and returned to work. Which health insurance coverage is primary?",
    options: [
      "Medicaid",
      "An individual's plan",
      "Workers’ compensation",
      "His employer’s group plan"
    ],
    answer: "Workers’ compensation"
  },
  {
    question: "Under Workers Compensation, injured employees are covered for all the following losses EXCEPT",
    options: [
      "Loss of wages",
      "Pain and suffering",
      "Medical expenses",
      "Occupational illness"
    ],
    answer: "Pain and suffering"
  },
  {
    question: "Group long-term disability benefit amounts are usually limited to what percentage of the participant's income?",
    options: [
      "40",
      "60",
      "80",
      "100"
    ],
    answer: "60"
  },
  {
    question: "Under New York’s cybersecurity regulation, multi-factor authentication would NOT include the use of a",
    options: [
      "Key card",
      "Fingerprint scan",
      "Password or passcode",
      "Text message on a smartphone"
    ],
    answer: "Password or passcode"
  },
  {
    question: "Insurance plans that are terminated for an entire group generally allow an extension of benefits to which type of employee?",
    options: [
      "Temporary",
      "Disabled",
      "Full time",
      "Laid off"
    ],
    answer: "Disabled"
  },
  {
    question: "Which of the following is a primary consideration in replacing a health insurance policy?",
    options: [
      "Shorter elimination periods",
      "The commission schedule of the proposed insurer",
      "The limitations and exclusions in the new policy",
      "The doctor’s recommendation to the proposed insured"
    ],
    answer: "The limitations and exclusions in the new policy"
  },
  {
    question: "The purpose of Medicare Supplement Insurance is to address gaps in Medicare coverage, which can include",
    options: [
      "Medicare in-hospital deductible",
      "Replacing HMO coverage",
      "Covering chiropractic treatment",
      "Treatment provided in a government hospital"
    ],
    answer: "Medicare in-hospital deductible"
  },
  {
    question: "A plan is designed to provide coverage that is actuarially equivalent to 80% of the full actuarial value of the benefits provided under the plan. What type of plan is this?",
    options: [
      "Gold",
      "Silver",
      "Bronze",
      "Platinum"
    ],
    answer: "Gold"
  },
  {
    question: "If there is a conflict between a policy provision and state statutes, the policy",
    options: [
      "Must be reviewed by the insurance commissioner",
      "Must meet minimum statute requirements",
      "Can be submitted as written",
      "Supersedes state statutes"
    ],
    answer: "Must meet minimum statute requirements"
  },
   {
    question: "Sam gets a new job with a small employer and enrolls in a health benefit plan that includes dependent coverage. Sam’s 6-year-old daughter has Type-1 Diabetes and is on an insulin pump. When will claims related to her pre-existing condition be covered?",
    options: [
      "Immediately",
      "After a waiting period of 90 days",
      "After a waiting period of 12 months",
      "After proving she has been complication-free for 6 months"
    ],
    answer: "Immediately"
  },
  {
    question: "An individual accident and health insurance policy must include",
    options: [
      "An automatic reinstatement provision",
      "A 10-day right of rescission provision",
      "Only the optional uniform provision",
      "A 60-day grace period"
    ],
    answer: "A 10-day right of rescission provision"
  },
  {
    question: "An insurer’s intentional relinquishment of a known right is",
    options: [
      "A waiver",
      "An endorsement",
      "A surrender",
      "A declaration"
    ],
    answer: "A waiver"
  },
  {
    question: "The following statement refers to which type of clause? “We have issued the policy in consideration of the representation in your applications and payment of the first-term premium.”",
    options: [
      "A contestability clause",
      "A consideration clause",
      "A concealment clause",
      "A whole contract clause"
    ],
    answer: "A consideration clause"
  },
  {
    question: "Which of the following is NOT included in an entire contract provision?",
    options: [
      "Unapproved changes made by the agent",
      "Insurance application",
      "Endorsement, if any",
      "Insurance policy"
    ],
    answer: "Unapproved changes made by the agent"
  },
  {
    question: "Health insurance contracts covering 2 to 50 employees and providing hospital and/or medical benefits are issued in the state ONLY when the contract",
    options: [
      "Is community-rated",
      "Has received a counteroffer",
      "Is unconditional",
      "Is modified through coercion"
    ],
    answer: "Is community-rated"
  },
  {
    question: "Which of the following is a feature of a major medical plan?",
    options: [
      "It covers doctors only",
      "It includes long-term care",
      "It only covers hospitalization",
      "May include a deductible and coinsurance"
    ],
    answer: "May include a deductible and coinsurance"
  },
  {
    question: "Which of the following clauses states that insureds are totally disabled when they CANNOT perform the major duties of their regular occupations?",
    options: [
      "Own occupation clause",
      "Forbidden work clause",
      "Regular Occupation Clause",
      "Any Occupation Clause"
    ],
    answer: "Own occupation clause"
  },
  {
    question: "Disability policies MOST often pay benefits in the form of",
    options: [
      "An annuity",
      "Periodic Income",
      "A lump sum reimbursement for wages lost",
      "A lump sum reimbursement for medical expenses"
    ],
    answer: "Periodic Income"
  },
  {
    question: "Which of the following Medicare plans allows participants to choose to receive their benefits through a Managed Health Care Plan?",
    options: [
      "Part A",
      "Part B",
      "Part C",
      "Part D"
    ],
    answer: "Part C"
  },
  {
    question: "On or after January 1, 2014, employers with no more than 25 full-time equivalent employees (FTEs) with an average annual wage of less than $50,000 may be eligible for a tax credit of up to how much of the premiums paid by the owner?",
    options: [
      "10%",
      "25%",
      "50%",
      "70%"
    ],
    answer: "50%"
  },
  {
    question: "A single contract for group medical insurance issued to an employer is known as",
    options: [
      "A group policy",
      "A master policy",
      "An employer policy",
      "A certificate policy"
    ],
    answer: "A master policy"
  },
  {
    question: "An Individual Employer Group Health Plan is noncontributory when",
    options: [
      "A minimum of 75% of all employees must be covered.",
      "An employer pays the premium and all employees are covered.",
      "The employees (rather than the employer) pay most of the premiums for the plan.",
      "Employee dependents will not be covered."
    ],
    answer: "An employer pays the premium and all employees are covered."
  },
  {
    question: "Penalties that may be levied by the Department of Insurance for committing insurance fraud do NOT include",
    options: [
      "Fines.",
      "License revocation.",
      "License suspension.",
      "Probation."
    ],
    answer: "Probation."
  },
  {
    question: "According to the Affordable Care Act, a child can remain on a parent’s health benefit plan until the child",
    options: [
      "Marries.",
      "Reaches age 19.",
      "Reaches age 26.",
      "Graduates from college."
    ],
    answer: "Reaches age 26."
  },
  {
    question: "Hospital care under a typical health insuring corporation (HIC) plan includes all of the following EXCEPT:",
    options: [
      "Private duty nursing.",
      "In-hospital laboratory work and X-rays.",
      "Inpatient laboratory services.",
      "Inpatient mental health care."
    ],
    answer: "Private duty nursing."
  },
  {
    question: "Which of the following documents describes the coverage, conditions, and limitations found in the master policy of a group contract?",
    options: [
      "Schedule A.",
      "Certificate of authority.",
      "Administrative services agreement.",
      "Certificate of coverage and benefits."
    ],
    answer: "Certificate of coverage and benefits."
  },
  {
    question: "When members use the services of a Preferred Provider Organization (PPO), they are typically",
    options: [
      "Not required to pay any user fees.",
      "Not charged a deductible.",
      "Charged a copayment amount.",
      "Assessed a set rate, regardless of services performed."
    ],
    answer: "Charged a copayment amount."
  },
  {
    question: "The type of care that is continuous 24-hour care provided by a licensed medical professional under the direct supervision of a physician is",
    options: [
      "Custodial care.",
      "Intermediate nursing care.",
      "Skilled nursing care.",
      "Respite care."
    ],
    answer: "Skilled nursing care."
  },
  {
    question: "According to the Affordable Care Act, essential health benefits do NOT include which of the following categories?",
    options: [
      "Maternity and newborn care.",
      "Routine vision care for adults.",
      "Preventive and wellness services.",
      "Mental health and substance use disorder."
    ],
    answer: "Routine vision care for adults."
  },
    {
    question: "Someone who sells, solicits, or negotiates insurance contracts compensation is called",
    options: ["An independent insurance adjuster.", "An insurance producer.", "An insurance adviser.", "A life insurer."],
    answer: "An insurance producer."
  },
  {
    question: "Under the grace period, an insured submits a $300 claim for medical expenses. The insurer notes that the insured has a past due premium of $100, and as a result, the insurer only pays $200. Which of the following provisions covers this situation.",
    options: ["Unpaid premium", "Payment actions.", "Payment of claims.", "Misstatement of age."],
    answer: "Unpaid premium"
  },
  {
    question: "Which of the following contracts enables the business owner who becomes disabled to transfer the business to a new owner and receive payment?",
    options: ["Key-employee disability insurance", "Business overhead expense policy.", "Disability buy-sell policy.", "Disability reducing term policy"],
    answer: "Disability buy-sell policy."
  },
  {
    question: "Which of the following is a mechanism to ensure a policy does NOT lapse?",
    options: ["Reinstatement period", "Elimination period", "Waiting period", "Grace period"],
    answer: "Grace period"
  },
  {
    question: "With regard to Disability Insurance, the waiting period is to",
    options: ["Exclude payments for a short-term illness.", "Determine severity of the illness", "Accurately calculate medical expenses.", "Determine policy owner's eligibility"],
    answer: "Determine policy owner's eligibility"
  },
  {
    question: "Which of the following services must be provided by a health benefit plan issued on or after January 1, 2014?",
    options: ["Adult eye care services", "Long-term care services.", "Adult dental care services", "Preventive health services"],
    answer: "Preventive health services"
  },
  {
    question: "Under the New York Disability Benefits Law, Benefits are usually computed as how much of an individual’s average weekly wages in the preceding 8-week period?",
    options: ["25%", "50%", "75%", "100%"],
    answer: "50%"
  },
  {
    question: "Which of the following is an example of a presumptive disability?",
    options: ["Loss of a hand.", "Loss of one foot.", "Loss of sight.", "Loss of three toes on one foot."],
    answer: "Loss of sight."
  },
  {
    question: "When an accident and health policy requires payment of an additional premium to provide coverage for a newborn, how many days after the birth is the first payment due?",
    options: ["60", "31", "14", "10"],
    answer: "31"
  },
  {
    question: "A specified coverage plan would provide coverage for which of the following?",
    options: ["Cancer.", "Broken leg.", "Pneumonia.", "Vasectomy."],
    answer: "Cancer."
  },
  {
    question: "According to the Affordable Care Act, an insurer may rescind coverage under a health benefit plan when",
    options: ["The insured attempts to add more than 3 additional dependents.", "The insured makes an intentional misrepresentation of a material fact.", "An insurer adds benefits to a plan offered on another tier at a comparable price.", "More than 30% of individuals covered under the plan qualify for additional tax credits."],
    answer: "The insured makes an intentional misrepresentation of a material fact."
  },
  {
    question: "Long-term care policies cover expenses for care when the insured CANNOT perform all of the following activities of daily living EXCEPT",
    options: ["Bathing", "Shopping", "Toileting", "Transferring"],
    answer: "Shopping"
  },
  {
    question: "What does Medicare Part B cover?",
    options: ["Hospital expenses.", "Prescription drugs.", "Doctor’s charges.", "Custodial Care."],
    answer: "Doctor’s charges."
  },
  {
    question: "Which of the following allows for a multiple of the face amount to be paid if the insured dies because of an accident?",
    options: ["Accidental death benefit", "Accelerated death benefit", "Term rider", "Cost of living rider"],
    answer: "Accidental death benefit"
  },
  {
    question: "A Medicare Supplement policy must NOT contain benefits which",
    options: ["Charge additional premiums.", "Duplicate Medicare benefits.", "Cover more than Medicare coverage.", "Are covered by Workers Compensation"],
    answer: "Duplicate Medicare benefits."
  },
  {
    question: "Which type of policy pays an amount per day for hospitalization to the insured regardless of the insured’s other health insurance?",
    options: ["Hospital indemnity", "Blanket", "Medigap", "Limited-amount per diem"],
    answer: "Hospital indemnity"
  },
  {
    question: "Which of the following is a common exclusion from coverages found in accident and health policies?",
    options: ["Emergency room coverages", "Coordination of benefits", "Self-inflicted injuries", "Chiropractic services"],
    answer: "Self-inflicted injuries"
  },
  {
    question: "The MAIN difference between occupational coverage and nonoccupational coverage is that occupational coverage",
    options: ["Does not provide full coverage", "Is mainly for those in hazardous occupations.", "Covers both on and off-the job injuries", "Does not take into account the risks associated with the insured job."],
    answer: "Covers both on and off-the job injuries"
  },
  {
    question: "Which of the following events, if any, will terminate guaranteed renewable insurance coverage?",
    options: ["Misstatement of age", "Nonpayment of premiums.", "Coverage cannot be terminated.", "Coverage offered under spouse’s policy."],
    answer: "Nonpayment of premiums."
  },
  {
    question: "Which of the following is NOT an Essential Health Benefit Category under the Affordable Care Act?",
    options: ["Emergency Services", "Laboratory Services.", "Alternative Medicine.", "Maternity and Newborn Care"],
    answer: "Alternative Medicine."
  },
  {
    question: "An individual buying disability insurance is concerned that the benefits may decrease over time. Which provision would MOST likely address this concern?",
    options: ["Cost of living benefit.", "Policy inflation option.", "Vocational disability benefit.", "Additional monthly benefit."],
    answer: "Policy inflation option."
  },
  {
    question: "Which of the following is an element of insurable risks?",
    options: ["Risk must be expected", "The lost must be calculable", "Risk must be financially insignificant", "Cost of insurance must be unaffordable"],
    answer: "Risk must be expected"
  },
  {
    question: "Which of the following benefits is NOT provided under the Healthy New York Program?",
    options: ["Prostate cancer screening.", "Mammograms.", "Mental health.", "Hospitalization."],
    answer: "Mental health."
  },
  {
    question: "Under the Affordable Care Act, an insurer may place dollar limits on coverage for",
    options: ["Laboratory services", "Mental health services", "Maternity and newborn care", "Routine adult dental services"],
    answer: "Routine adult dental services"
  },
  {
    question: "Dependent children can continue to be covered under a parent’s medical contract after the reaching age 23 if",
    options: ["They are unable to support themselves due to a physical handicap", "They are full-time students", "They are married, but living in the parent’s home", "They are unemployed due to a layoff at work"],
    answer: "They are unable to support themselves due to a physical handicap"
  },
  {
    question: "Making a statement that is false or maliciously critics of the financial condition of an insurer is known as",
    options: ["Coercion.", "Defamation", "Intimidation", "False advertising"],
    answer: "Defamation"
  },
  {
    question: "Donna and Mary were racing in shopping carts pushed by fellow employees. Mary’s cart ran into another employee, John, while he was stocking the shelves, which caused injuries to both of them. Who is definitely covered under Workers Compensation?",
    options: ["John", "Mary.", "John and Mary.", "Neither."],
    answer: "John"
  },
  {
    question: "An application for an insurance license must be accompanied by:",
    options: ["A letter of reference from a licensed agent", "An official set of fingerprints of the applicant", "Payment of a filing fee", "A transcript of college grades"],
    answer: "Payment of a filing fee"
  },
  {
    question: "Dependent children can be covered under an individual’s group plan up to what age?",
    options: ["18", "19", "25", "26"],
    answer: "26"
  },
  {
    question: "The illegal occupation provision ensures that the insurer is NOT liable for losses incurred while the policy owner was",
    options: ["Under the influence of prescription drugs.", "Attempting to commit a felony", "Pursuing a criminal", "Not at work."],
    answer: "Not at work."
  },
  {
    question: "Individuals who are eligible for Medicare on the first day of the month in which they turn age 65 are automatically enrolled in",
    options: ["Part A", "Part B", "Part C", "Part D"],
    answer: "Part A"
  },
  {
    question: "Some health plans pay benefits on a “usual, customary and reasonable” (UCR) basis while other plans may pay established amounts in accordance with a list of injuries, surgical procedures, or other losses. What is this list known as?",
    options: ["Loss menu.", "Coverage chart.", "Benefit schedule.", "Listing of benefit amounts."],
    answer: "Listing of benefit amounts."
  },
  {
    question: "According to the Health Insurance Portability and Accountability Act (HIPAA), when can a group health policy renewal be denied?",
    options: ["There have been too many claims in the previous year.", "The size of the group has increased by more than 10%.", "Participants or contribution rules have been violated.", "Participation or contribution rules have been changed."],
    answer: "Participation or contribution rules have been violated."
  },
  {
    question: "What level of agent authority is given when the principal gives the agent authority in writing?",
    options: ["Express", "Implied", "Apparent", "Direct"],
    answer: "Express"
  },
  {
    question: "When marketing to groups for health insurance, who should be issued a certificate as proof of coverage?",
    options: ["Sponsor", "Employee", "Employer", "HMO"],
    answer: "Employee"
  },
  {
    question: "Health insurance policies that can be purchased to cover specific low frequency diseases are",
    options: ["Group health policies", "Group specific policies.", "Individual health policies", "Individual limited policies."],
    answer: "Individual limited policies."
  },
  {
    question: "When managing a health insurance plan for a group, the insured's administrative cost for each insured person",
    options: ["Varies among all group members.", "Equals the cost of insuring each member individually", "Is less than the cost if each member was individually insured", "Is more than the cost if each member was individually insured"],
    answer: "Is less than the cost if each member was individually insured"
  },
  {
    question: "Long-term care policies MUST cover which of the following conditions?",
    options: ["Alcoholism or drug addiction.", "Acts of war while serving in the military", "Self-inflicted injuries.", "Alzheimer’s disease"],
    answer: "Alzheimer’s disease"
  },
  {
    question: "The cause of a loss is called",
    options: ["A peril", "A hazard", "An exposure", "A risk"],
    answer: "A peril"
  },
   {
    question: "For the purpose of the Producer Compensation Transparency Regulation, a “Purchaser” does NOT include",
    options: ["Any person or entity to be a charger under an insurance contract.", "An owner of a life insurance policy or annuity contract", "An applicant for insurance, bond or annuity", "Wholesale brokers"],
    answer: "Wholesale brokers"
  },
  {
    question: "All of the following preventive care services are provided by health insuring corporation (HIC) primary care physicians EXCEPT:",
    options: ["Well-baby checkups", "Immunization for children", "Hearing screenings for adults", "Physical Examinations"],
    answer: "Hearing screenings for adults"
  },
  {
    question: "Under the Volunteer Firefighter’s Benefit, which of the following activities is NOT covered under the Workers’ Compensation benefit law?",
    options: ["Participating at a fire", "Travel to and from, and during a fire call", "Competitive events in which volunteer members are competing", "Attendance at a fire instruction school or meeting of the fire company"],
    answer: "Competitive events in which volunteer members are competing"
  },
  {
    question: "Which of the following gifts from an agent would NOT be considered rebating?",
    options: ["$5 pen with the insurer’s name.", "$20 t-shirt without insurer’s name.", "$25 clock with insurer’s name.", "$25 clock without insurer’s name."],
    answer: "$25 clock without insurer’s name."
  },
  {
    question: "In a hospitality indemnity plan, an elimination period refers to the number of days",
    options: ["For which the insured can receive benefits for each hospital visit.", "For which the insured can receive benefits for the term of the plan.", "An insured must wait before becoming eligible to receive benefits for the term of the plan.", "An insured must wait before becoming eligible to receive benefits for each hospital stay."],
    answer: "An insured must wait before becoming eligible to receive benefits for each hospital stay."
  },
  {
    question: "The Health Insurance Portability and Accountability Act (HIPAA) ensures that qualified individuals who change jobs will have access to group health insurance with their new employer without",
    options: ["Having to satisfy a new preexisting condition period.", "Having any increase in premium costs.", "Having to meet a new deductible.", "Any change in the level of benefits they receive."],
    answer: "Having to satisfy a new preexisting condition period."
  },
{
    question: "The MAIN difference between occupational coverage and nonoccupational coverage is that occupational coverage",
    options: ["does not provide full coverage", "is mainly for those in hazardous occupations", "covers both on and off the job injuries", "does not take into account the risks associated with the insured's job"],
    answer: "covers both on and off the job injuries"
  },
  {
    question: "If a consumer requests more information about an insurance producer's compensation for a proposed insurance policy, the producer MUST disclose which of the following?",
    options: ["The producer's role in the sale of the insurance contract", "The amount of compensation the producer will receive for selling the insurance contract.", "Whether the producer will receive compensation from the insurer for selling the insurance contract.", "Whether the producer will receive compensation from a third party for selling the insurance contract."],
    answer: "The amount of compensation the producer will receive for selling the insurance contract."
  },
  {
    question: "When marketing to groups for health insurance, who should be issued a certificate as proof of coverage?",
    options: ["Sponsor", "Employee", "Employer", "HMO"],
    answer: "Employee"
  },
  {
    question: "An example of an alien insurer would be",
    options: ["a United States-based insurer providing policies for immigrants to the United States.", "an insurer formed according to the legal requirements of another country.", "a Tennessee-based insurer providing insurance policies for travel to foreign countries", "A Virginia-based insurer that also insures people from foreign countries"],
    answer: "a Tennessee-based insurer providing insurance policies for travel to foreign countries"
  },
  {
    question: "Which of the following is a life insurance contact written on the life of an individual?",
    options: ["Insurance", "Survivorship Policy", "Joint Life Contract", "Single-Life Insurance"],
    answer: "Single-Life Insurance"
  },
  {
    question: "As a form of level premium permanent insurance, ordinary life insurance accumulates a reserve that eventually",
    options: ["Equal the face amount of the policy", "Results in a dividend payment to the policyowner", "Ceases to earn interest or grow in a positive earnings direction", "Requires mandatory cash value distributions"],
    answer: "Equal the face amount of the policy"
  },
  {
    question: "Which nonforfeiture option allows the policyowner to purchase less coverage for life?",
    options: ["Reduced paid-up Insurance", "Cash Surrender Value", "Settlement Value", "Extended Term"],
    answer: "Extended Term"
  },
  {
    question: "According to the Affordable Care Act, if a large employer does NOT provide health insurance and owes an employer mandate penalty, the annual penalty is calculated by multiplying $2,000 by",
    options: ["The number of full time employees", "The number of full time employees minus 30", "The number of subsidized full time employee minus 30", "The number of unsubsidized full time employee minus 30"],
    answer: "The number of full time employees minus 30"
  },
  {
    question: "Which of the following CORRECTLY identifies the favorable income tax treatment afforded to annuities?",
    options: ["Annual earnings are partially income tax deductible.", "Annual earnings are partially income tax exempt.", "Gains are taxed only on distribution.", "The entire distribution is taxed at the owner's rate of taxation."],
    answer: "Gains are taxed only on distribution."
  },
  {
    question: "Which type of life insurance policy is written under a single contract for both spouses in which it is payable upon the first death?",
    options: ["Survivorship", "Dual capacity", "Joint", "Spousal."],
    answer: "Joint"
  },
  {
    question: "With respect to small group health benefit plan, a carrier may discontinue coverage or may refuse to renew such a plan if the employer",
    options: ["employs fewer than 15 full-time employees.", "has filed for bankruptcy in the prior year.", "has a supplemental plan with a competing carrier.", "fails to pay the premium prior to the end of the grace period."],
    answer: "fails to pay the premium prior to the end of the grace period."
  },
  {
    question: "In which of the following dividend options would an insurer invest the policyowners money and add interest earnings to the initial amount of the dividends?",
    options: ["Accumulation at interest Option", "Paid-up Additions Option", "Cash Dividend Option.", "Reduced Premium Dividend Option"],
    answer: "Accumulation at interest Option"
  },
  {
    question: "Which type of group has a constitution and bylaws, is organized and maintained in good faith for purposes other than obtaining insurance, and has insurance for the purpose of covering members and their employees?",
    options: ["Credit insurance group.", "Multiple employer groups.", "Association or labor group.", "Employee or individual employer group."],
    answer: "Association or labor group."
  },
  {
    question: "Which one of the following BEST describes \"consideration\" for a health insurance policy?",
    options: ["The premium only", "The statements made in the application only.", "The statements made in the application and the premium.", "The statements made in the application and the insuring clause."],
    answer: "The statements made in the application and the premium."
  },
  {
    question: "All of the following Statements apply to the surrender of an annuity contract EXCEPT",
    options: ["surrender charges will reduce the contract payout amount.", "the right to surrender is available on immediate annuities.", "the owner has the right to surrender the contract during the accumulation period", "surrender charges diminish over a stated number of years and will eventually disappear."],
    answer: "surrender charges will reduce the contract payout amount."
  },
   {
    question: "Which of the following provides a death benefit if the spouse of the insured dies?",
    options: ["Accelerated death benefit rider.", "Family Term-insurance rider", "Guaranteed insurability rider.", "Long-term care insurance rider."],
    answer: "Family Term-insurance rider"
  },
  {
    question: "Based on the Patient Protection and Affordable Care Act (PPACA), what is the time limit for which a group health plan can deny an employee coverage for a preexisting medical condition?",
    options: ["0 days", "90 days", "6 months", "12 months"],
    answer: "0 days"
  },
  {
    question: "A life insurance rider which reimburses expenses incurred in a convalescent or nursing home facility is",
    options: ["Disability.", "Long-Term Care.", "Accidental Death.", "Cost of Living."],
    answer: "Long-Term Care."
  },
  {
    question: "A single premium immediate annuity is MOST often used for",
    options: ["Retirement income", "Children’s college expenses", "Mortgage payments", "Vacation expenses"],
    answer: "Retirement income"
  },
  {
    question: "Which of the following is a potential DISADVANTAGE of a fixed annuity?",
    options: ["Annuitants could experience a decrease in the purchasing power of their payments over a period of years due to inflation.", "There is no guaranteed specific benefit amount to the annuitant", "The insured invests payments in variable securities, and the return fluctuates with an uncertain economic market.", "Payments continue only for a maximum of 2 years after the annuitant's death."],
    answer: "Annuitants could experience a decrease in the purchasing power of their payments over a period of years due to inflation."
  },
  {
    question: "Upon receipt of notice of claim, the insurance company will furnish to the claimant such forms for loss within how many days?",
    options: ["10", "15", "20", "30"],
    answer: "15"
  },
  {
    question: "Which type of annuity guarantees a level benefit payment?",
    options: ["Variable.", "Universal.", "Limited Life.", "Fixed."],
    answer: "Fixed."
  },
  {
    question: "Which of the following benefits will be paid to the business under a business overhead expense policy after the elimination period?",
    options: ["The amount needed to pay the mortgage for the business property", "The actual overhead expenses incurred during the owner’s disability", "An amount equal to the overhead expenses incurred in the month prior to the owner’s disability", "The minimum dollar value needed to keep the business running"],
    answer: "The actual overhead expenses incurred during the owner’s disability"
  },
  {
    question: "A common disaster clause states that if the beneficiary dies from the same accident as the insured individual, the insurer will proceed as if the",
    options: ["insured individual outlived the beneficiary", "beneficiary outlived the insured individual", "beneficiary was never named on the policy.", "beneficiary and the insured individual died simultaneously."],
    answer: "beneficiary and the insured individual died simultaneously."
  },
  {
    question: "Which kind of retirement plan can a 75-employee for Profit Corporation establish?",
    options: ["Roth IRA", "403 (b)", "SIMPLE IRA", "Keogh."],
    answer: "Keogh."
  },
  {
    question: "Which type of insurance policy is characterized by premiums that are fully paid up within a stated period, after which no further premiums are REQUIRED?",
    options: ["Lump sum insurance.", "Basic installment insurance.", "Prepaid premium insurance.", "Limited payment life insurance."],
    answer: "Limited payment life insurance."
  },
{
    question: "Which of the following is a health insuring corporation (HIC) provider of specialty care?",
    options: ["A neurologist", "The admissions nurse at a designated HIC provider hospital", "An HIC medical director", "A preferred provider organization (PPO) director"],
    answer: "An HIC medical director"
  },
  {
    question: "Which of the following dividend options will increase the death benefit?",
    options: ["Guaranteed insurability.", "Accelerated endowment.", "Paid-up additions.", "Extended term."],
    answer: "Paid-up additions."
  },
  {
    question: "The insurer relies on the truthfulness and integrity of the applicant when issuing a policy. This is a characteristic of",
    options: ["contract of adhesion.", "utmost good faith.", "subrogation.", "coinsurance."],
    answer: "utmost good faith."
  },
  {
    question: "An annuity product linked to a market-related rate of return is called",
    options: ["a fixed annuity.", "an indexed annuity", "a deferred annuity.", "a tax-sheltered annuity."],
    answer: "an indexed annuity"
  },
  {
    question: "Which of the following services must be provided by a health benefit plan issues on or after January 1, 2014?",
    options: ["Adult eye care services.", "Long-term care services.", "Adult dental services.", "Preventive health service"],
    answer: "Preventive health service"
  },
  {
    question: "For a contract to be valid, it MUST be for a legal purpose and",
    options: ["Involve consideration.", "be offered.", "involve warranties.", "be written."],
    answer: "Involve consideration."
  },
  {
    question: "Under Workers' Compensation, injured employees are covered for all of the following losses EXCEPT",
    options: ["loss of wages.", "pain and suffering.", "medical expenses.", "occupational illness."],
    answer: "pain and suffering."
  },
  {
    question: "Which of the following is described when a selected group of practitioners, in a certain area, agrees to provide services at a pre-arranged cost on a fee-for-service basis?",
    options: ["preferred provider organization", "indemnity organization", "risk purchasing group", "coalition group"],
    answer: "preferred provider organization"
  },
  {
    question: "In a health insurance policy, an insured has an out-of-pocket limit of $10,000 a deductible of $500, and an 80%/20% coinsurance. The insured incurs $50,000 of covered losses in an accident. How much will the insurer have to pay?",
    options: ["35500", "39600", "40000", "49500"],
    answer: "39600"
  },
  {
    question: "An applicant for a Medicare supplement policy must sign a receipt acknowledging delivery of a Buyer’s Guide when the",
    options: ["policy is delivered.", "applicant is over age 70.", "agent takes the application.", "policy is a direct response solicitation."],
    answer: "policy is a direct response solicitation."
  },
  {
    question: "All forms of insurance determine exposure through",
    options: ["the Affordable Care Act.", "data from population tables.", "risk pooling and the law of large numbers", "knowledge of the average age and gender of a specific area"],
    answer: "risk pooling and the law of large numbers"
  },
  {
    question: "According to the Affordable Care Act, an insurer may rescind coverage under a health benefit plan when",
    options: ["the insured attempts to add more than 3 additional dependents", "the insured makes an intentional misrepresentation of a material fact", "an insurer adds benefits to a plan offered on another tier at a comparable price", "more than 30% of individuals covered under the plan qualify for additional tax credits."],
    answer: "the insured makes an intentional misrepresentation of a material fact"
  },
  {
    question: "All the following policies qualify for a 1035 Exchange EXCEPT",
    options: ["a whole life policy to another whole life policy.", "whole life policy to an annuity.", "an annuity to another annuity.", "an annuity to a whole life policy"],
    answer: "an annuity to a whole life policy"
  },
  {
    question: "Which rider allows the policyowner to increase the face amount to adjust for inflation?",
    options: ["Return of premium.", "Cost of living.", "Payor benefit.", "Guaranteed insurability."],
    answer: "Cost of living."
  },
  {
    question: "A Payor Benefit Rider would be found on which type of policy?",
    options: ["A whole life policy", "A juvenile life policy", "An adjustable life policy", "A joint and survivor policy"],
    answer: "A juvenile life policy"
  },
  {
    question: "Dependent children can be covered under an individual's group plan up to what age?",
    options: ["18", "19", "25", "26"],
    answer: "26"
  },
  {
    question: "Which of the following is a common exclusion to a vision rider on a policy?",
    options: ["Eye examination.", "Cost of lenses and frames.", "Cost of contact lenses.", "Laser eye surgery."],
    answer: "Laser eye surgery."
  },
  {
    question: "If a person advertises the availability of life settlements they MUST be licensed as a",
    options: ["special purpose entity", "related provider trust.", "life insurance company.", "Life settlement broker."],
    answer: "Life settlement broker."
  },
  {
    question: "A policy illustration given at time of sale does NOT typically include the",
    options: ["cash value of the policy.", "names of the beneficiary", "effective interest rate for policy loans.", "10th and 20th year cost surrender value."],
    answer: "10th and 20th year cost surrender value."
  },
  {
    question: "What is a Life Settlement Contract?",
    options: ["A bona fide business succession planning arrangement.", "An assignment of a policy as collateral for a loan made by a licensed financial institution.", "The paying of predetermined surrender benefit by the insurer of the policy.", "An agreement to pay a policyowner less than the expected death benefit."],
    answer: "An agreement to pay a policyowner less than the expected death benefit."
  },
  {
    question: "The purpose of Medicare Supplement insurance is to address gaps in Medicare coverage, which can include",
    options: ["Medicare in-hospital deductible", "replacing HMO coverage.", "covering chiropractic treatment", "treatment provided in a government hospital."],
    answer: "Medicare in-hospital deductible"
  },
  {
    question: "If the premium is not paid at the time of application, a Statement of Good Health MUST be signed by the policyowner at the time of",
    options: ["the medical examination", "underwriter review.", "policy delivery", "application."],
    answer: "application."
  },
  {
    question: "Under the Affordable Care Act, insurer may refuse to accept an internal appeal on a denied claim if",
    options: ["the claim is under $500.", "the insured is unable to pay an appeal fee.", "the appeal is filed more than 180 days after the claim denial.", "The insured has submitted three appeals within the calendar year."],
    answer: "the appeal is filed more than 180 days after the claim denial."
  },
 {
    question: "An individual accident and health insurance policy must include",
    options: ["An automatic reinstatement provision", "AIO-day right of rescission provision", "Only the optional uniform provisions", "A 60-day grace period"],
    answer: "A 60-day grace period"
  },
  {
    question: "When underwriting group life insurance, the underwriter",
    options: ["typically evaluates the group as a whole", "requires every group member to be covered.", "evaluates the groups on an individual basis.", "requires medical information from each individual."],
    answer: "typically evaluates the group as a whole"
  },
  {
    question: "Which is NOT excluded in a long-term care policy?",
    options: ["Alcoholism", "Alzheimer's disease", "Non-cognitive mental disorders", "Treatment caused by participation in criminal behavior"],
    answer: "Alzheimer's disease"
  },
  {
    question: "Employees changing employers CANNOT be denied group health coverage under their new employer's plan even if they have preexisting conditions, according to the",
    options: ["Social Security Act.", "Health Insurance Portability and Accountability Act (HIPAA).", "Americans with Disabilities Act", "Consolidated Omnibus Budget Reconciliation Act (COBRA)."],
    answer: "Health Insurance Portability and Accountability Act (HIPAA)."
  },
  {
    question: "Loans may generally be obtained against the cash value of a personal life insurance policy and policy loan proceeds",
    options: ["accelerate the benefits under the policy.", "are not treated as taxable income", "are subject to Federal estate tax.", "generate nontaxable interest income."],
    answer: "are not treated as taxable income"
  },
  {
    question: "What is required before human immunodeficiency virus (HIV) testing can be performed as part of individual accident and health insurance?",
    options: ["The applicant must sign an agreement to pay for the testing.", "The agent must sign and deliver a notification form.", "The applicant must sign a consent form", "The applicant's physician must sign a release form."],
    answer: "The applicant must sign a consent form"
  },
  {
    question: "Predicting an individual's future earning potential and determining how much incorporates the",
    options: ["loss exposure approach.", "salary projection approach.", "personal needs approach.", "human value approach."],
    answer: "human value approach."
  },
  {
    question: "Which of the following is an example of a presumptive disability?",
    options: ["Loss of a hand.", "Loss of one foot.", "Loss of sight.", "Loss of three toes on one foot."],
    answer: "Loss of sight."
  },
  {
    question: "Under the New York Disability Benefits Law, benefits are usually computed as how much of an individual's average weekly wages in the preceding 8-week period?",
    options: ["0.25", "0.5", "0.75", "1"],
    answer: "0.5"
  },
  {
    question: "Long-term care policies MUST cover which of the following conditions?",
    options: ["Alcoholism or drug addiction.", "Acts of war while serving in the military.", "Self-inflicted injuries.", "Alzheimer’s disease."],
    answer: "Alzheimer’s disease."
  },
  {
    question: "The PRIMARY reason for purchasing life insurance is to provide",
    options: ["Death benefits", "College tuition", "Retirement income", "Safety of principal"],
    answer: "College tuition"
  },
  {
    question: "A Medicare Supplement policy must NOT contain benefits which",
    options: ["charge additional premiums.", "duplicate Medicare benefit", "cover more than Medicare coverage.", "are covered by Workers Compensation."],
    answer: "duplicate Medicare benefit"
  },
  {
    question: "Which of the following is NOT a requirement of a qualified plan?",
    options: ["It must be permanent", "It must have a vesting schedule.", "it must discriminate as to who can participate.", "It must be written and communicated to all participants."],
    answer: "It must be permanent"
  },
  {
    question: "Some health plans pay benefits on a 'usual, customary, and reasonable' (UCR) basis while other plans may pay established amounts in accordance with a list of injuries, surgical procedures, or other losses. What is this list known as?",
    options: ["Loss menu.", "Coverage chart.", "Benefit schedule.", "Listing of benefit amounts."],
    answer: "Listing of benefit amounts."
  },
  {
    question: "Which of the following describes the cause of a loss?",
    options: ["Risk", "Hazard", "Peril", "Insurance"],
    answer: "Peril"
  },
  {
    question: "Which approach considers the future needs of the survivors in determining amounts of life insurance?",
    options: ["Human Life Value Approach.", "Cost Comparison Approach.", "Living Benefits Approach", "Needs Approach"],
    answer: "Needs Approach"
  },
  {
    question: "Replacing a policy when it is NOT in the best interest of a client is known as",
    options: ["discrimination", "defamation", "twisting", "rebating"],
    answer: "twisting"
  },
  {
    question: "Under a Universal Life insurance policy, a corridor represents the",
    options: ["gap between the total death benefit and the policy's cash value.", "time allotted to the insured to convert a group policy to an individual policy.", "stipulated time period that a policy may be reinstated after it has lapsed.", "percentage of benefits paid to each of the policy’s beneficiaries."],
    answer: "gap between the total death benefit and the policy's cash value."
  },
  {
    question: "The insured, who is 59 years of age decides to replace a long-term care policy they had for five years for a new policy. Which of the following is true of the insurer?",
    options: ["The original insurer will reimburse benefit dollars not used under the original policy period.", "The replacement insurer will probationary period and preexisting condition limitations.", "The replacement insurer will not honor previous exclusions that had previously been satisfied under the original policy.", "The replacement insurer will waive probationary periods pertaining to preexisting conditions satisfied under the original policy."],
    answer: "The replacement insurer will not honor previous exclusions that had previously been satisfied under the original policy."
  },
  {
    question: "A travel accident policy and a dread disease contract are examples of",
    options: ["group health policies.", "family health policies.", "personal health policies.", "limited health insurance policies."],
    answer: "limited health insurance policies."
  },
  {
    question: "A 65 Year-old employee who works for an employer with 24 employees is disabled on the job. The employee has fully recovered and returned to work. Which health coverage is primary?",
    options: ["Medicaid", "an individual plan", "workers' compensation", "his employer’s group plan"],
    answer: "workers’ compensation"
  },
  {
    question: "The PRIMARY difference between a noncancellable policy and guaranteed renewable policy is that only with a noncancelable policy can the insurer",
    options: ["Retain the right to refuse to renew the policy at a certain age", "cancel for excessive claims.", "allow renewal of policy for 5 years if the insured is over age 54.", "never raise premiums."],
    answer: "Retain the right to refuse to renew the policy at a certain age"
  },
  {
    question: "Sue Ellen is the sister of a licensed New York insurance producer, Frank Gillespie. Frank was recently killed in a car accident and Sue Ellen has been issued a temporary license to run Frank's agency. For what period of time is the initial temporary license valid?",
    options: ["3 months.", "6 months.", "1 year.", "2 years."],
    answer: "6 months."
  },
  {
    question: "Which of the following is a characteristic of level premium term life insurance",
    options: ["It provides for lower benefits.", "It can be used for cash value.", "It matches the level amount of protection on the insured's life expectancy.", "The cost of insurance is averaged throughout the contract."],
    answer: "The cost of insurance is averaged throughout the contract."
  },
  {
    question: "Some states have laws ensuring that health insurance coverages are available at a reasonable cost and under reasonable conditions for small employers. Small employers are defined as having no more than",
    options: ["200 employees.", "150 employees.", "100 employees.", "75 employees."],
    answer: "100 employees."
  },
  {
    question: "Hospital care under a typical health insuring corporation (HIC) plan includes all of the following EXCEPT:",
    options: ["Private duty nursing", "In-hospital laboratory work and X-rays", "Inpatient laboratory services", "Inpatient mental health care"],
    answer: "Private duty nursing"
  },
  {
    question: "In disability income insurance, which of the following is excluded from coverage?",
    options: ["Accidental self-inflicted injuries.", "Attempted suicide", "Passengers on a commercial flight.", "Passengers on a private flight."],
    answer: "Passengers on a private flight."
  },
  {
    question: "Under the Affordable Care Act, an insurer may place dollar limits on coverage for",
    options: ["laboratory services.", "mental health services.", "maternity care and newborn care", "Routine adult dental services"],
    answer: "Routine adult dental services"
  },
  {
    question: "For a group to be acceptable for group health insurance underwriting, it should be",
    options: ["formed for the purpose of obtaining health insurance that is not individually underwritten.", "formed for a purpose other than to obtain low-cost health insurance.", "open to only healthy individuals with no preexisting conditions.", "consist of individuals employed by the same employer."],
    answer: "consist of individuals employed by the same employer."
  },
 {
    question: "Which of the following documents describes the coverage, conditions, and limitations found in the master policy of a group contract?",
    options: ["Schedule", "Certificate of authority.", "Administrative services agreement.", "Certificate of and benefits."],
    answer: "Certificate of coverage and benefits."
  },
  {
    question: "An individual who is NOT acceptable by an insurer at standard rates because of health, habits, or occupation is called",
    options: ["rating risk.", "standard risk.", "preferred risk.", "substandard risk."],
    answer: "substandard risk."
  },
  {
    question: "Insurance agents have duties and responsibilities to the insured and the insurer. Which of the following responsibilities does an agent owe the insured during the policy year?",
    options: ["Help the insured file and follow up on claims.", "Notify the insurance department when claims are paid.", "Work with rating bureaus to establish insurer ratings.", "Pay the insured's premiums if they are unable to do so."],
    answer: "Help the insured file and follow up on claims."
  },
  {
    question: "Two business partners own life insurance on each other. If one partner dies, which of the following contracts allows the surviving partner to use the death benefit to purchase the deceased owner's interest?",
    options: ["Buy-sell agreement.", "Key employee life insurance.", "Business continuation.", "Accidental death."],
    answer: "Buy-sell agreement."
  },
  {
    question: "Donna and Mary were racing in shopping carts pushed by fellow employees. Mary's cart ran into another employee, John, while he was stocking the shelves, which caused injuries to both of them. Who is definitely covered under Workers' Compensation?",
    options: ["John.", "Mary.", "John and Mary.", "Neither."],
    answer: "John."
  },
  {
    question: "The levels of coverage defined in the Affordable Care Act are",
    options: ["HMO, EPO, POS, and PPO.", "Bronze, Silvery Gold, and Platinum.", "Individual, Parent-Child, Spousal, and Family.", "Child Only, Limited Benefit Plan, Catastrophic, and Major Medical"],
    answer: "Bronze, Silvery Gold, and Platinum."
  },
  {
    question: "Which of the following products is designed to pay benefits that can provide a stream of retirement income to the purchaser?",
    options: ["annuity contract", "tax-deferred growth", "variable life insurance", "modified endowment contract"],
    answer: "annuity contract"
  },
  {
    question: "Who is eligible for Child Health Plus?",
    options: ["A New York resident under the age of 19", "A 27-year-old full-time student", "A 10-year-old attending a summer camp in New York who resides in Pennsylvania", "The 30-year-old parents of a 3-year-old child"],
    answer: "A New York resident under the age of 19"
  },
    {
    question: "Which of the following statements BEST describes a single premium cash value policy?",
    options: ["It requires only one payment to make the policy paid up.", "It provides for only one premium to be paid without evidence of insurability.", "It waives one future premium if the owner becomes disabled.", "It requires the policyowner to pay one premium annually."],
    answer: "It provides for only one premium to be paid without evidence of insurability."
  },
  {
    question: "Which kind of retirement plan can a 1,500-employee for-profit corporation establish?",
    options: ["401 (k).", "403 (b).", "Keogh.", "Simplified Employee Pension Plan."],
    answer: "401 (k)."
  },
  {
    question: "Which of the following is a basic benefit of Medicare Supplemental insurance?",
    options: ["First 3 pints of blood each year.", "At-home recovery.", "Basic drugs limit of $1,250.", "Preventive care."],
    answer: "Preventive care."
  },
  {
    question: "A Key Person Disability Income Policy pays benefits to the",
    options: ["spouse", "dependent", "employee", "employer"],
    answer: "employer"
  },
  {
    question: "A Section 457 Deferred Compensation plan is provided specifically for employees of",
    options: ["sole proprietorships.", "religious organizations.", "non-profit organizations.", "states, counties, or municipalities"],
    answer: "states, counties, or municipalities"
  },
  {
    question: "A health insurance policy has $1,000 deductible and 80%/20% coinsurance of the next $3,000. The Insured receives a medical bill of $5,000. How much would the insured be responsible to pay?",
    options: ["$1,000", "$1,800", "$3,000", "$4,000"],
    answer: "$1,800"
  },
  {
    question: "Which statement is NOT a characteristic of a Group Life Insurance Plan?",
    options: ["master contract.", "Probationary periods.", "Individual underwriting", "Certificate of insurance."],
    answer: "Individual underwriting"
  },
  {
    question: "If the age of an insured under a life insurance policy is misstated, the following is CORRECT concerning the death benefit amount?",
    options: ["The amount of the death benefit will be paid to the insured.", "The amount indicated in the policy will be paid to the beneficiary.", "The amount paid will be what the premium would have purchased at the correct age.", "The amount paid will be reduced by the unfunded dividend reserve."],
    answer: "The amount paid will be what the premium would have purchased at the correct age."
  },
  {
    question: "Which of the following benefits is NOT provided under the Healthy New York Program?",
    options: ["Prostate cancer screening", "Mammograms", "Mental health", "Hospitalization"],
    answer: "Mental health"
  },
  {
    question: "In order to reinstate an individual life insurance policy, the policy owner MUST do all of the following EXCEPT",
    options: ["complete a reinstatement application.", "provide evidence of insurability.", "pay all overdue premiums with interest.", "sign a statement saying the policy will not lapse again"],
    answer: "sign a statement saying the policy will not lapse again"
  },
  {
    question: "All of the following are considered a risk EXCEPT the",
    options: ["nature of the insured's occupation.", "amount the insured charges for services", "location of the insured's business.", "proximity of the insured's location to emergency services."],
    answer: "amount the insured charges for services"
  },
  {
    question: "The applicant must face the possibility of losing something of value in the event of the insured's death. This principle is known as",
    options: ["insurable interest", "adverse selection.", "indemnification.", "viatical settlement."],
    answer: "insurable interest"
  },
  {
    question: "An annuity transaction has all of the following assumptions EXCEPT:",
    options: ["the consumer has been reasonably informed.", "the insurer may have adequate training for the recommendation.", "the particular annuity is suitable for the consumer.", "there is a benefit for the consumer based off some feature of the annuity."],
    answer: "the insurer may have adequate training for the recommendation."
  },
  {
    question: "Which of the following groups is NOT eligible for the Healthy New York Program",
    options: ["Large employer", "Sole proprietors", "Small employers", "Working uninsured"],
    answer: "Large employer"
  },
  {
    question: "Which of the following is covered by Medicare Part A?",
    options: ["Physician services.", "Prescription drugs.", "Inpatient hospital services.", "Diagnostic tests."],
    answer: "Inpatient hospital services."
  },
  {
    question: "Group Disability Income insurance usually involves",
    options: ["higher premiums than individual disability policies.", "providing benefits for nonoccupational illnesses and injuries.", "A requirement that all employees participate.", "workers who are individually uninsurable because of their high-risk occupations."],
    answer: "providing benefits for nonoccupational illnesses and injuries."
  },
  {
    question: "What is the purpose of the policy review when an agent delivers a new life insurance policy to the insured?",
    options: ["to confirm that the insured understands all aspects of the policy", "to give the agent a chance to sell another policy to the insured", "to allow the insured to return the policy for a refund of the premium", "to permit the parties to revise the policy provisions, terms, and conditions"],
    answer: "to confirm that the insured understands all aspects of the policy"
  },
  {
    question: "An insured individual purchases a disability policy with a waiver of premium rider on January 1. The individual is disabled on June 1. On July 1, he receives proof of permanent and total disability, and submits a claim. He begins receiving benefits on July 15. When are his premiums waived?",
    options: ["January 1", "June 1", "July 1", "July 15"],
    answer: "July 1"
  },
  {
    question: "Which of the following guarantees that the annuitant CANNOT outlive their benefits?",
    options: ["Right of survivorship.", "Guaranteed lifetime withdrawal benefits.", "Guaranteed minimum accumulation benefit.", "Simple income rider."],
    answer: "Guaranteed lifetime withdrawal benefits."
  },
  {
    question: "To avoid tax consequences, a rollover from a Traditional IRA to another IRA MUST be done within",
    options: ["30 days.", "45 days.", "60 days.", "90 days."],
    answer: "60 days."
  },
  {
    question: "If Term Life Insurance is renewable, the policyowner is purchasing the right to renew the policy",
    options: ["with proof of insurability.", "without an increase in premiums at renewal.", "for an unlimited number of times.", "without showing proof of insurability"],
    answer: "without showing proof of insurability"
  },
  {
    question: "If there is a conflict between a policy provision and state statutes the policy",
    options: ["must be reviewed by the insurance commissioner.", "must meet minimum statute requirements.", "can be submitted as written.", "supersedes state statutes."],
    answer: "must meet minimum statute requirements."
  },
  {
    question: "Which of the following is a common exclusion from coverages found in accident and health policies?",
    options: ["emergency room coverages", "coordination of benefits", "self-inflicted injuries", "chiropractic services"],
    answer: "self-inflicted injuries"
  },
  {
    question: "When an accident and health policy requires payment of an additional premium to provide coverage for a newborn, how many days after the birth is the first payment due?",
    options: ["60", "31", "14", "10"],
    answer: "31"
  },
  {
    question: "Which of the following is TRUE concerning the conversion group life insurance coverage to an individual policy?",
    options: ["It applies whenever life insurance coverage terminates.", "The insured receives a paid-up conversion policy upon termination of employment unless he or she informs the insurer otherwise.", "An insurer cannot require evidence of insurability before issuing a conversion policy.", "The premiums under the conversion policy will be the same."],
    answer: "The insured receives a paid-up conversion policy upon termination of employment unless he or she informs the insurer otherwise."
  },
  {
    question: "Survivorship life insurance policies are useful in estate planning because they",
    options: ["accumulate a sum of money for retirement.", "can provide money to pay taxes on assets.", "redistribute the premium obligation during the early years of the policy.", "provide funeral insurance and pre-need burial insurance."],
    answer: "can provide money to pay taxes on assets."
  },
  {
    question: "Which of the following is NOT an Essential Health Benefit Category under the Affordable Care Act?",
    options: ["Emergency Services.", "Laboratory Services.", "Alternative Medicine.", "Maternity and Newborn Care"],
    answer: "Alternative Medicine."
  },
 {
    question: "Which of the following allows for a multiple of the face amount to be paid if the insured dies because of an accident?",
    options: ["Accidental death benefit.", "Accelerated death benefit.", "Term rider.", "Cost of living rider."],
    answer: "Accidental death benefit."
  },
  {
    question: "Who of the following is REQUIRED to be licensed as an insurance producer?",
    options: ["An underwriter at an insurer.", "An officer or director of a licensed insurer.", "An administrator of a group plan.", "An individual selling a policy for commission."],
    answer: "An individual selling a policy for commission."
  },
  {
    question: "Non-statutory group short-term disability benefits are typically paid",
    options: ["daily.", "weekly.", "bi-weekly.", "monthly."],
    answer: "weekly."
  },
  {
    question: "If an insured under a life insurance policy dies with an outstanding loan balance then the death benefit will",
    options: ["be reduced by the amount of the loan and interest owed.", "not be paid until the loan is repaid.", "be paid less the amount of the loan but not the interest.", "be paid less the amount Of the loan interest but not the principal."],
    answer: "be reduced by the amount of the loan and interest owed."
  },
  {
    question: "When does an employee who has permanent kidney failure become eligible for Medicare coverage?",
    options: ["once off group plan", "once on disability", "age 65 and older", "at any age"],
    answer: "at any age"
  },
  {
    question: "How long is the contestable period for a life insurance policy?",
    options: ["1 year", "2 years", "4 years", "10 years"],
    answer: "2 years"
  },
  {
    question: "Penalties that may be levied by the Department of insurance for committing insurance fraud do NOT include",
    options: ["fines.", "license revocation.", "license suspension.", "probation."],
    answer: "probation."
  },
  {
    question: "If an annuitant dies during the accumulation period, his or her beneficiary will receive",
    options: ["the greater of the accumulated cash value or the total premiums paid.", "the lesser of the accumulated cash value or the total premiums paid.", "no monetary funds.", "both the accumulated cash value and the total premiums paid."],
    answer: "both the accumulated cash value and the total premiums paid."
  },
  {
    question: "Which of the following is true about applying for Medicare Supplement policies outside open enrollment?",
    options: ["Coverage will be issued on a guaranteed issue basis.", "It is not possible to get coverage after the initial enrollment period.", "Coverage will be issued with longer elimination periods and higher deductibles.", "There is no guarantee a company will sell you coverage if you do not meet underwriting guidelines."],
    answer: "There is no guarantee a company will sell you coverage if you do not meet underwriting guidelines."
  },
  {
    question: "The type of care that is continuous 24-hour care provided by licensed medical professionals under the direct supervision of a physician is",
    options: ["custodial care.", "intermediate nursing care.", "skilled nursing care.", "respite care."],
    answer: "skilled nursing care."
  },
  {
    question: "A PRIMARY difference between pre-certification provision and concurrent review is that only the pre-certification provision",
    options: ["is designed to be a cost containment measure.", "involves a review by the physician.", "requires the consent of the patient.", "occurs before the treatment is provided."],
    answer: "occurs before the treatment is provided."
  },
   {
    question: "What is a certificate of authority?",
    options: ["A document indicating an insurer's membership in the guarantee fund.", "The approval by the department of insurance for an insurer to use its advertising.", "The license required for an insurer to conduct business in the state.", "An insurer’s contract with its agents."],
    answer: "The license required for an insurer to conduct business in the state."
  },
  {
    question: "When delivering a specified disease insurance policy, an agent might be expected to collect on delivery from the new policy owner any of the following EXCEPT",
    options: ["a signed statement of continued good health.", "the premium, if not paid with the application.", "a modified application form with a new signature.", "a signed statement acknowledging an impairment rider."],
    answer: "a signed statement acknowledging an impairment rider."
  },
  {
    question: "According to Health insurance Portability and Accountability Act (HIPAA), can a group health policy renewal be denied?",
    options: ["There have been too many claims in the previous year.", "The size of the group has increased by more than 10%.", "Participation or contribution rules have been violated.", "Participation or contribution rules have been changed."],
    answer: "Participation or contribution rules have been changed."
  },
  {
    question: "Which of the following is TRUE about agents' life insurance sales advertisements in New York State?",
    options: ["It may not call attention to any unauthorized insurers.", "It may call attention to the fact that the New York Life Insurance Guaranty Fund provides full coverage for the policy.", "It may not call attention to cash value policies.", "It may call attention to a New York licensed insurer without indicating the full name of the insurer."],
    answer: "It may call attention to a New York licensed insurer without indicating the full name of the insurer."
  },
  {
    question: "The only beneficiary named in a life insurance policy died before the insured. The policyowner did not name a new beneficiary. When a claim is filed, the death benefit would be paid to the",
    options: ["beneficiary's estate.", "insured's estate.", "insured's next of kin.", "policyowner."],
    answer: "insured’s estate."
  },
  {
    question: "Insurance that is designed to pay the balance of a loan if the insured dies before the loan has been repaid in full is",
    options: ["life settlement", "whole life", "universal life", "credit life"],
    answer: "credit life"
  },
  {
    question: "According to the Affordable Care Act, essential health benefits do NOT include which of the following categories?",
    options: ["Maternity and newborn care", "Routine vision care for adults", "Preventive and wellness services", "Mental health and substance use disorder"],
    answer: "Routine vision care for adults"
  },
  {
    question: "Under the grace period, an insured submits a $300 claim for medical expenses. The insurer notes that the insured has a past due premium of $100, and as a result, the insurer only pays $200. Which of the following provisions covers this situation?",
    options: ["Unpaid premium", "Payment actions", "Payment of claims", "Misstatement of age"],
    answer: "Unpaid premium"
  },
  {
    question: "What is the purpose of the Insurance Frauds Prevention Act?",
    options: ["Identify the requirement that underwriters need to follow in order to evaluate risk.", "Regulates the use of advertising an insurer can use when selling insurance products.", "Protects the consumer against illegal activity in the issuance of policies and Payment of claims.", "Requires an insurer to publicly disclose its capital reserves for each fiscal year."],
    answer: "Protects the consumer against illegal activity in the issuance of policies and Payment of claims."
  },
  {
    question: "An annuity that guarantees a given number of income payments, whether or not annuitant is alive to receive them, is referred to as",
    options: ["a life annuity certain.", "an assured life annuity.", "a guaranteed survivor annuity.", "an irrevocable endowed annuity."],
    answer: "a life annuity certain."
  },
  {
    question: "Health insurance contracts covering 2 to 50 employee and providing hospital and/or medical benefits are issued in the state ONLY when the contract",
    options: ["is community rated.", "has received a counteroffer.", "is unconditional.", "is modified through coercion."],
    answer: "is community rated."
  },
  {
    question: "What is the PRIMARY purpose of disability insurance?",
    options: ["provide thorough medical care", "replace workers' compensation coverage", "provide an individual a means to replace wages", "ensure that an individual can return to work as soon as possible"],
    answer: "provide an individual a means to replace wages"
  },
  {
    question: "The general enrollment period for Medicare Part B ends on",
    options: ["March 31", "May 31", "June 30", "December 31"],
    answer: "December 31"
  },
  {
    question: "A trust may NOT be used in connection with a new life insurance policy when the intent is to",
    options: ["name the trust as the policy beneficiary and another party as the policyowner.", "conceal that a life settlement provider is financing the purchase of the policy.", "prohibit a spouse from directing the policy death benefit to a stepchild.", "minimize the estate taxes that will be paid to the government at the insured’s death."],
    answer: "prohibit a spouse from directing the policy death benefit to a stepchild."
  },
  {
    question: "Term life insurance differs from permanent life insurance in that MOST often, term life insurance",
    options: ["accumulates a much smaller cash value.", "has a longer premium payment period.", "remains in force for a specific period of time.", "is automatically renewable at the end of the term period."],
    answer: "remains in force for a specific period of time."
  },
  {
    question: "An insurance producer's license is valid for no longer than",
    options: ["12 months", "18 months", "24 months", "36 months"],
    answer: "24 months"
  },
  {
    question: "Upon the death of an insured individual, what does life insurance guarantee to deliver to the beneficiary?",
    options: ["An annuity", "A specific sum of money", "A dividend", "A final expense fund"],
    answer: "A specific sum of money"
  },
  {
    question: "With regard to Disability Insurance, the waiting period is to:",
    options: ["Exclude payments for a short-term illness", "Determine severity of illness", "Accurately calculate medical expense", "Determine policyowner's eligibility"],
    answer: "Determine policyowner’s eligibility"
  },
 {
    question: "Who would Not be covered under an additional insured rider attached to a life insurance policy?",
    options: ["A spouse", "Employee", "Minor children", "Dependent parents"],
    answer: "Employee"
  },
  {
    question: "A policy may contain provisions excluding or restricting coverage as specified in the event of death under all of the following EXCEPT:",
    options: ["A fare-paying passenger traveling via commercial transportation", "A licensed pilot of a personal aircraft", "War, or act of war", "Suicide"],
    answer: "A fare-paying passenger traveling via commercial transportation"
  },
  {
    question: "The entity that has the power to revoke a producer's insurance license is the:",
    options: ["Insurer", "Local agency", "Department of Insurance", "National Association of Insurance Commissioners (NAIC)"],
    answer: "National Association of Insurance Commissioners (NAIC)"
  },
  {
    question: "Disclosure provisions are established for what purpose?",
    options: ["Explain grievance procedure", "Available for just life and disability coverage", "Used for certain changes in benefits and premiums", "Offer endorsement only after applicant is approved"],
    answer: "Used for certain changes in benefits and premiums"
  },
  {
    question: "A person covered under a certain life insurance contract who seeks to sell their policy and enter into a life settlement contract is the:",
    options: ["Settlement broker", "Policyowner", "Insurer", "Settlement provider"],
    answer: "Policyowner"
  },
  {
    question: "An insured owns a whole life policy that has accumulated cash value. Which of the following statements is true about the policy's cash value?",
    options: ["The policy's cash value is viewed as investment growth and therefore subject to taxation for each calendar year", "The growth of the policy’s cash value is not subjected to income tax while the policy is in force", "It is subject to fluctuations of the company's overall performance", "The cash value is not guaranteed"],
    answer: "The growth of the policy’s cash value is not subjected to income tax while the policy is in force"
  },
  {
    question: "Prior to annuitization, what is the nonforfeiture value of an annuity?",
    options: ["Only premiums vested in the account three years prior to withdrawal.", "All premiums paid", "Total accumulation of cash growth value", "All premiums paid, plus interest, minus any withdrawals and surrender charges"],
    answer: "All premiums paid, plus interest, minus any withdrawals and surrender charges"
  },
  {
    question: "An insurer would consider which of the following in determining whether to accept a group life plan?",
    options: ["Grace period", "Beneficiary", "Average age", "Dependents"],
    answer: "Average age"
  },
  {
    question: "In New York, insurable interest in the life of another person MUST exist",
    options: ["At the time the contract is made", "At the time of the claim", "From the effective date to the time of claim", "Five years after the policy has been in effect"],
    answer: "At the time the contract is made"
  },
  {
    question: "Which of the clauses states that insureds are totally disabled when they CANNOT perform the major duties of their regular occupation?",
    options: ["Own occupation clause", "Forbidden work clause", "Regular occupation clause", "Any occupation clause"],
    answer: "Own occupation clause"
  },
  {
    question: "Which of the following is a characteristic of conversion from group to permanent life insurance?",
    options: ["Proof of insurability is required", "Conversion must be to term insurance", "Conversion must be applied for within thirty-one days of termination", "Premiums for the new policy will be based on the age when first covered by the group policy"],
    answer: "Conversion must be applied for within thirty-one days of termination"
  },
  {
    question: "The change of beneficiary provision states the policyowner has the right to change the beneficiary UNLESS the beneficiary is",
    options: ["Uninsurable", "Irrevocable", "Contingent", "Deceased"],
    answer: "Irrevocable"
  },
  {
    question: "Mortality is based on a large risk pool of",
    options: ["Income and time", "People and time", "Geographic area and time", "Family history and hobbies"],
    answer: "People and time"
  },
  {
    question: "What element of a contract does the application represent?",
    options: ["Offer", "Acceptance", "Consideration", "Competent parties"],
    answer: "Consideration"
  },
  {
    question: "Which of the following statements BEST describes a disability elimination period?",
    options: ["A time deductible rather than a dollar deductible", "A benefit or utilization period", "A dollar deductible rather than a time deductible.", "A qualifying period"],
    answer: "A time deductible rather than a dollar deductible"
  },
  {
    question: "With respect to a life settlement contract, no person shall directly or indirectly pay a referral or finder’s fee to any person other than the",
    options: ["Owner’s physician", "Insurance consultant", "Owner's accountant", "Life settlement broker"],
    answer: "Life settlement broker"
  },
  {
    question: "Under the grace period, an insured submits a $300 claim for medical expenses. The insurer notes that the insured has a past due premium of $100, and as a result, the insurer only pays $200. Which of the following provisions covers this situation?",
    options: ["Unpaid premium", "Payment actions", "Payment of claims", "Misstatement of age"],
    answer: "Unpaid premium"
  },
  {
    question: "A single premium immediate annuity is MOST often used for",
    options: ["Retirement income", "Children’s college expenses", "Mortgage payments", "Vacation expenses"],
    answer: "Retirement income"
  },
  {
    question: "Which term is a result of a calculation based on the average number of months the insured is projected to live due to medical history and mortality factors?",
    options: ["Mortality rate", "Life expectancy", "Risk exposure", "Net premium"],
    answer: "Life expectancy"
  },
  {
    question: "In order to reduce premiums, a life insurance policy can legally be backdated up to",
    options: ["3 months", "4 months", "6 months", "12 months"],
    answer: "6 months"
  },
  {
    question: "When marketing to groups for health insurance, who should be issued a certificate as proof of coverage?",
    options: ["Sponsor", "Employee", "Employer", "HMO"],
    answer: "Employee"
  },
  {
    question: "Which of the following level of care do NOT contribute to the improvement of the insured’s medical condition?",
    options: ["Acute", "Custodial", "Intermediate", "Skilled"],
    answer: "Custodial"
  },
  {
    question: "An insured has a policy with a cash value of $1,500 and an outstanding loan of $500. How much money will the insured receive under the cash surrender value option?",
    options: ["$500", "$1,000", "$1,500", "$2,000"],
    answer: "$1,000"
  },
  {
    question: "Which of the following is a characteristic of level premium term life insurance?",
    options: ["It provides for lower benefits", "It can be used for cash value", "It matches the level amount of protection on the insured’s life expectancy", "The cost of insurance is averaged throughout the life of the contract"],
    answer: "The cost of insurance is averaged throughout the life of the contract"
  },
  {
    question: "The PRIMARY difference between a noncancellable policy and guaranteed renewable policy is that only with a noncancellable policy can the insurer",
    options: ["Retain the right to refuse to renew the policy at a certain age", "Cancel for excessive claims", "Allow renewal of policy for 5 years if the insured is over age 54", "Never raise premiums"],
    answer: "Never raise premiums"
  },
  {
    question: "Under workers’ compensation, injured employees are covered for all of the following losses EXCEPT",
    options: ["Loss of wages", "Pain and suffering", "Medical expenses", "Occupational illness"],
    answer: "Pain and suffering"
  },
  {
    question: "Which kind of retirement plan can a 75-employee for Profit Corporation establish?",
    options: ["Roth IRA", "403b", "Simple IRA", "Keogh"],
    answer: "Simple IRA"
  },
   {
    question: "The guarantee insurability option offered on a long-term care policy provides",
    options: ["Future purchase option with no additional premium charge", "Future periodic increases in coverage without proof of insurability", "Automatic increase in the daily benefit amount to protect against inflation", "Paid up coverage if the insured cancels the policy due to nonpayment of premium"],
    answer: "Future periodic increases in coverage without proof of insurability"
  },
  {
    question: "Who may terminate an agent appointment?",
    options: ["The insurer", "The policyowner", "The agent", "The insured"],
    answer: "The insurer"
  },
  {
    question: "Which of the following contract enables the business owner who becomes disabled to transfer the business to new owner and receive payment?",
    options: ["Key-employee disability insurance", "Business overhead expenses policy", "Disability buy-sell policy", "Disability reducing term policy"],
    answer: "Disability buy-sell policy"
  },
  {
    question: "According to the Affordable Care Act, essential health benefits do NOT include which of the following categories?",
    options: ["Maternity and newborn care", "Routine vision care for adults", "Preventive and wellness services", "Mental health and substance use disorder"],
    answer: "Routine vision care for adults"
  },
  {
    question: "Without written consent, a policyowner CANNOT change the beneficiary if he has named",
    options: ["a contingent beneficiary", "a revocable beneficiary", "a permanent beneficiary", "an irrevocable beneficiary"],
    answer: "an irrevocable beneficiary"
  },
  {
    question: "A whole life policy is replaced with an annuity without incurring a tax penalty. This is referred to as",
    options: ["a Cross-Purchase Plan", "an Endowment Contract", "A Transfer of value", "a 1035 Exchange"],
    answer: "a 1035 Exchange"
  },
  {
    question: "Which of the following is a methodology in which the premium for all of an insurer's covered insureds within a geographic region is the same?",
    options: ["compound interest", "community rating", "experience rating", "concurrent review"],
    answer: "community rating"
  },
  {
    question: "Penalties that may be levied by the Department of Insurance for committing insurance fraud do NOT include",
    options: ["fines", "license revocation", "license suspension", "probation"],
    answer: "probation"
  },
  {
    question: "Which of the following is a whole life policy option that allows for a delinquent premium to be paid automatically by a new policy loan?",
    options: ["Term Rider", "Fixed-period Installments", "Automatic Premium Loan Option", "Spendthrift Clause"],
    answer: "Automatic Premium Loan Option"
  },
  {
    question: "A Section 457 Deferred Compensation plan is provided specifically for employees of",
    options: ["sole proprietorship", "religious organizations", "non-profit organizations", "states, counties, or municipalities"],
    answer: "states, counties, or municipalities"
  },
  {
    question: "A 65-year-old employee who works for an employer with 24 employees is disabled on the job. The employee has fully recovered and returned to work. Which health coverage is primary?",
    options: ["Medicaid", "an individual plan", "workers’ compensation", "his employer's group plan"],
    answer: "his employer's group plan"
  },
  {
    question: "The provision in a life insurance policy that allows the policyowner to cancel the policy within a limited period and receive a full refund is the:",
    options: ["Discovery period", "Probationary period", "Grace period", "Free-look period"],
    answer: "Free-look period"
  },
  {
    question: "An insurer that is owned by its policyholders and can pay annual dividends to them is considered a",
    options: ["mutual company", "reciprocal exchange", "fraternal society", "stock company"],
    answer: "mutual company"
  },
  {
    question: "If a subscriber of a Preferred Provider Organization (PPO) obtains care from an out-of-network provider, which of the following will occur?",
    options: ["The care is covered", "The care is not covered", "The subscriber only has to pay their co-payment", "The subscriber must have a referral from their primary care physician in order to have coverage"],
    answer: "The care is not covered"
  },
  {
    question: "An employee of any age becomes immediately eligible for Medicare when",
    options: ["diagnosed with permanent kidney failure", "early retirement is taken past age 55", "as soon as Social Security begins", "they become disabled"],
    answer: "diagnosed with permanent kidney failure"
  },
  {
    question: "An insured has a 20 pay life policy with a paid-up dividend option. In this option, the insured may",
    options: ["use policy dividends to reduce the premium after 20 years", "pay up the policy early by using policy dividends", "pay up the policy early by using accumulated cash values", "waive premium payments until the policy has accumulated enough cash values to pay it up for 20 years"],
    answer: "pay up the policy early by using policy dividends"
  },
  {
    question: "Which type of insurance policy is characterized by premiums that are fully paid up within a stated period, after which no further premiums are REQUIRED?",
    options: ["Lump sum insurance", "Basic installment insurance", "Prepaid premium insurance", "Limited payment life insurance"],
    answer: "Limited payment life insurance"
  },
  {
    question: "Medicaid provides which coverage that Medicare does NOT?",
    options: ["custodial care", "ambulance services", "inpatient psychiatric care", "inpatient hospital services"],
    answer: "custodial care"
  },
  {
    question: "The Health Insurance Portability and Accountability Act (HIPAA) ensures that qualified individuals who change jobs will have access to group health insurance with their new employer without",
    options: ["having to satisfy a new preexisting condition period", "having any increase in premium costs", "having to meet a new deductible", "any change in the level of benefits they receive"],
    answer: "having to satisfy a new preexisting condition period"
  },
  {
    question: "An annuity that guarantees a given number of income payments, whether or not the annuitant is alive to receive them, is referred to as",
    options: ["A life annuity certain", "an assured life annuity", "a guaranteed survivor annuity", "an irrevocable endowed annuity"],
    answer: "A life annuity certain"
  },
  {
    question: "A life insurance policy's double indemnity provision would apply when the policyowner's death occurs due to",
    options: ["War", "Illness", "an accident", "natural causes"],
    answer: "an accident"
  },
  {
    question: "The commission paid for a Long-Term Care policy during all renewal years must be the same as provided:",
    options: ["For any policy renewal at the same time", "For any policy of the same type", "In the second year of service", "In the first year of service"],
    answer: "In the second year of service"
  },
  {
    question: "A company may insure an employee with specialized skills under a key employee disability insurance policy. Which of the following statements is TRUE?",
    options: ["The business is the applicant", "The employee's spouse is the beneficiary", "The employee pays the premium", "The employee is the applicant"],
    answer: "The business is the applicant"
  },
  {
    question: "A health insuring corporation (HIC) must offer emergency health services",
    options: ["In non-emergent situations", "Only when provided by in-network providers", "Outside and inside the insured’s service area", "At a minimum of twenty-four hours a day, six days per week"],
    answer: "Outside and inside the insured’s service area"
  },
  {
    question: "The cost of a long-term care policy is based on all of the following EXCEPT",
    options: ["Age", "health condition", "level of benefits provided", "personal income"],
    answer: "personal income"
  },
  {
    question: "In accidental injury insurance, the insurance policy, the endorsements, and any relevant papers attached to the policy make up the:",
    options: ["Completed application", "Entire contract", "Uniform mandatory policy provisions", "Notice of coverage"],
    answer: "Entire contract"
  },
  {
    question: "Which of the following statements is TRUE about Medicaid?",
    options: ["It is health insurance for the elderly", "It is administered by the Federal government", "It is funded by federal, state, and local taxes", "Coverages include compulsory hospital and voluntary supplemental medical insurance"],
    answer: "It is funded by federal, state, and local taxes"
  },
  {
    question: "An insured wants to purchase a policy with three key elements: Flexible premium, death benefit, and the choice of how the cash value will be invested. The insured should purchase",
    options: ["adjustable life", "universal term life", "variable universal life", "graded premium whole life"],
    answer: "variable universal life"
  },
  {
    question: "If an insurer determines the insured is totally disabled, the policyowner is relieved of paying the policy premiums as long as the disability continues. This statement describes the",
    options: ["double indemnity rider", "disability income rider", "return of premium rider", "waiver of premium rider"],
    answer: "waiver of premium rider"
  },
  {
    question: "When an accident and health policy requires payment of additional premium to provide coverage for a newborn, how many days after the birth is the first payment due?",
    options: ["60", "31", "14", "10"],
    answer: "31"
  },
  {
    question: "Which of the following provides a death benefit if the spouse of the insured dies?",
    options: ["Accelerated death benefit rider", "Family Term insurance rider", "Guaranteed insurability rider", "Long-term care insurance rider"],
    answer: "Family Term insurance rider"
  },
  {
    question: "What pays during the waiting period for government benefits when the insured's income is terminated by illness, sickness, or accident?",
    options: ["Immediate Payment Rider", "Social Insurance Supplement", "Supplemental Compensation Rider", "Deferred Compensation Insurance"],
    answer: "Supplemental compensation rider"
  },
 {
    question: "When underwriting group life insurance, the underwriter",
    options: ["typically evaluates the group as a whole", "requires every group member to be covered", "evaluates the groups on an individual basis", "requires medical information from each individual"],
    answer: "typically evaluates the group as a whole"
  },
  {
    question: "Some health plans pay benefits on a \"usual, customary, and reasonable\" (UCR) basis while other plans may pay established amounts in accordance with a list of injuries, surgical procedures, or other losses. What is this list known as?",
    options: ["Loss menu", "Coverage chart", "Benefit-schedule", "Listing of benefit amounts"],
    answer: "Benefit-schedule."
  },
  {
    question: "An insurance producer’s license is valid for no longer than",
    options: ["12 months", "18 months", "24 months", "36 months"],
    answer: "24 months"
  },
  {
    question: "An insurance contract is a contract of utmost good faith because the insurer relies on the truthfulness of the applicant and the insured relies on the insurer's promise to",
    options: ["issue a policy", "file reports with the insurance department", "pay the claims", "charge a fair premium"],
    answer: "pay the claims"
  },
  {
    question: "The Healthy New York Program is designed to",
    options: ["provide life insurance to large group employers", "provide affordable health insurance coverage to small employers", "generate revenues for New York State Government", "promote good nutrition in New York State schools"],
    answer: "provide affordable health insurance coverage to small employers"
  },
  {
    question: "In health insurance policies, the reinstatement provision is",
    options: ["mandatory", "optional", "elective", "not required"],
    answer: "mandatory"
  },
  {
    question: "According to the Affordable Care Act, if a large employer does NOT provide health insurance and owes an employer mandate penalty, the annual penalty is calculated by multiplying $2,000 by",
    options: ["The number of full time employees", "The number of full time employees minus 30", "The number of subsidized full time employees minus 30", "The number of unsubsidized full time employees minus 30"],
    answer: "The number of full time employees minus 30"
  },
  {
    question: "A fiduciary duty involves which of the following?",
    options: ["Proper handling of all client premium", "underwriting all applications", "Approving or disapproving the policy", "Setting premium amounts"],
    answer: "Proper handling of all client premium"
  },
  {
    question: "Multiple policies that are rated for different communities and have substantially similar benefits as determined by the superintendent will be required to:",
    options: ["merge plans", "pool experience", "change benefits", "refile rates"],
    answer: "merge plans"
  },
  {
    question: "Generally, what are the tax implications of life insurance proceeds to the beneficiary?",
    options: ["Taxed as earned income", "Taxed as unearned income", "Tax deferred to the estate of the insured", "Tax free at the time of the insured's death"],
    answer: "Tax free at the time of the insured's death"
  },
  {
    question: "Which of the following services MUST be provided by a health benefit plan issued on or after January 1, 2014?",
    options: ["Adult eye care services", "Long-term care services", "Adult dental care services", "Preventive health services"],
    answer: "Preventive health services"
  },
  {
    question: "How many days does a terminated employee have to convert his group life insurance policy to an individual policy?",
    options: ["15", "31", "45", "60"],
    answer: "31"
  },
  {
    question: "The applicant must face the possibility of losing something of value in the event of the insured's death. This principle is known as",
    options: ["insurable interest", "adverse selection", "Indemnification", "viatical settlement"],
    answer: "insurable interest"
  },
  {
    question: "According to the Affordable Care Act, an insurer may rescind coverage under a health benefit plan when",
    options: ["the insured attempts to add more than 3 additional dependents", "the insured makes an intentional misrepresentation of a material fact", "an insurer adds benefits to a plan offered on another tier at a comparable price", "more than 30% of individuals covered under the plan qualify for additional tax credits"],
    answer: "the insured makes an intentional misrepresentation of a material fact."
  },
  {
    question: "The levels of coverage defined in the Affordable Care Act are",
    options: ["HMO, EPO, POS, and PPO", "Bronze, Silver, Gold, and Platinum", "Individual, Parent-Child, Spousal, and Family", "Child Only, Limited Benefit Plan, Catastrophic, and Major Medical"],
    answer: "Bronze, Silver, Gold, and Platinum."
  },
  {
    question: "When trying on wedding rings at a jewelry store, a woman left her engagement ring on the countertop only to return later and find it missing. The woman experienced a",
    options: ["transfer of risk", "hazard", "peril", "loss"],
    answer: "loss"
  },
  {
    question: "When using the needs approach to determine the amount of life insurance needed, it is necessary to determine all of the following EXCEPT",
    options: ["projected lifetime earnings in the stock market, including dividends and growth account", "cumulative earning power of the income earner along with other sources of passive income", "family's financial obligations in the event of the death or disability of the income earner", "Medical, educational, and financial requirements of the surviving family in the event of the death or disability of the income earner"],
    answer: "projected lifetime earnings in the stock market, including dividends and growth account."
  },
  {
    question: "The settlement option that pays the maximum death benefit proceeds until death of the beneficiary is known as",
    options: ["life with period certain", "installment refund", "life income", "lump sum"],
    answer: "life with period certain"
  },
  {
    question: "Individuals who are eligible for Medicare on the first day of the month in which they turn age 65 are automatically enrolled in",
    options: ["Part A", "Part B", "Part C", "Part D"],
    answer: "Part A"
  },
  {
    question: "Which type of life insurance policy is written under a single contact for both spouses in which it is payable upon the first death?",
    options: ["Survivorship", "Dual capacity", "Joint", "Spousal"],
    answer: "Joint"
  },
  {
    question: "An agent's underwriting duties include which of the following?",
    options: ["Setting premium amounts", "Completing all applications and collecting initial premiums", "Declining or accepting an application", "Issuing the policy"],
    answer: "Completing all applications and collecting initial premiums"
  },
  {
    question: "In broad terms, the types of support and services generally associated with Long-Term Care policies are provided at which three levels of care?",
    options: ["Professional, social, and economic care", "Home-based, assisted living, and medical care", "Functional, rehabilitation, and medical care", "Skilled nursing, intermediate, and custodial care"],
    answer: "Skilled nursing, intermediate, and custodial care"
  },
  {
    question: "When a buyer is considering a long-term care policy, they are encouraged to review carefully all policy",
    options: ["limitations", "facilities", "carriers", "agents"],
    answer: "limitations"
  },
  {
    question: "Prescription drug coverage is usually considered which type of benefit under a group medical policy?",
    options: ["mandatory", "built in", "optional", "omitted"],
    answer: "optional"
  },
  {
    question: "Which is the name of the policy that combines a universal life policy with investment choices?",
    options: ["Interest-sensitive universal life policy", "Straight universal life policy", "Variable universal life policy", "Flexible universal life policy"],
    answer: "Variable universal life policy"
  },
  {
    question: "Which of the following is NOT considered advertising?",
    options: ["A policy illustration.", "An AM Best company rating", "A direct mailing by an insurer", "An agent's oral sales presentation"],
    answer: "An AM Best company rating"
  },
  {
    question: "A trust may NOT be used in connection with a new life insurance policy when the intent is to",
    options: ["name the trust as the policy beneficiary and another party as the policyowner", "conceal that a life settlement provider is financing the purchase of the policy.", "prohibit a spouse from directing the policy death benefit to a stepchild.", "minimize the estate taxes that will be paid to the government at the insured's death."],
    answer: "conceal that a life settlement provider is financing the purchase of the policy."
  },
  {
    question: "The purpose of Medicare Supplement Insurance is to address gaps in Medicare coverage, which can include",
    options: ["Medicare in-hospital deductible", "replacing HMO coverage", "covering chiropractic treatment", "treatment provided in a government hospital"],
    answer: "Medicare in-hospital deductible"
  },
  {
    question: "Which type of group has a constitution and bylaws, is organized and maintained in good faith for purposes other than obtaining insurance, and has insurance for the purpose of covering members and their employees?",
    options: ["Credit insurance group.", "Multiple employer groups.", "Association or labor group.", "Employee or individual employer group."],
    answer: "Association or labor group."
  },
  {
    question: "Which of the following is a common exclusion from coverages found in accident and health policies?",
    options: ["Emergency room coverages", "coordination of benefits", "self-inflicted injuries", "chiropractic services"],
    answer: "self-inflicted injuries"
  },
  {
    question: "Donna and Mary were racing in shopping carts pushed by fellow employees. Mary's cart ran into another employee, John, while he was stocking the shelves, which caused injuries to both of them. Who is definitely covered under Workers Compensation?",
    options: ["John", "Mary", "John and Mary", "Neither"],
    answer: "John"
  },
  {
    question: "Long-term care policies MUST cover which of the following conditions?",
    options: ["Alcoholism or drug addiction", "Acts of war while serving in the military", "Self-inflicted injuries.", "Alzheimer’s disease."],
    answer: "Alzheimer’s disease."
  },
  {
    question: "Non-statutory group short-term disability benefits are typically paid",
    options: ["daily", "weekly", "bi-weekly", "Monthly"],
    answer: "weekly"
  },
  {
    question: "According to Health Insurance Portability and Accountability Act(HIPAA), when can a group health policy renewal be denied?",
    options: ["There have been too many claims in the previous year", "The size of the group has increased by more than 10%", "Participation or contribution rules have been violated", "Participation or contribution rules have been changed"],
    answer: "Participation or contribution rules have been violated"
  },
  {
    question: "To receive proceeds from a death benefit, a minor",
    options: ["must be related to the insured.", "can only be named as a contingent beneficiary", "must be at least 16 years old.", "must have an appointed guardian."],
    answer: "must have an appointed guardian"
  },
  {
    question: "When would an attending physician's statement be appropriate for life insurance purposes?",
    options: ["As a matter of routine when the applicant signs the life insurance application", "At the request of the insurer without knowledge or approval of the applicant", "At the request of the insurance applicant to be submitted with the life insurance application.", "At the request of the insurer when it could affect the underwriting decision but with the consent of the applicant."],
    answer: "At the request of the insurance applicant to be submitted with the life insurance application"
  },
  {
    question: "An insurer monitors the care an insured is receiving in the hospital to be sure that everything is proceeding according to schedule. This BEST describes",
    options: ["precertification authorization.", "concurrent review", "benefit checking", "claims adjudication."],
    answer: "concurrent review"
  },
  {
    question: "Under the Affordable Care Act, insurer may refuse to accept an internal appeal on a denied claim if",
    options: ["the claim is under $500.", "the insured is unable to pay an appeal fee.", "the appeal is filed more than 180 days after the claim denial", "the insured has submitted three appeals within the calendar year."],
    answer: "the appeal is filed more than 180 days after the claim denial"
  }
];
[
  {
    "question": "All of the following are typical health insuring corporation (HIC) preventive care services provided by a primary care physician EXCEPT",
    "options": ["Diagnostic imaging", "Well-baby checkups", "Physical examinations", "Immunizations for children"],
    "answer": "Diagnostic imaging"
  },
  {
    "question": "Long-term care policies cover expenses for care when the insured CANNOT perform all of the following activities of daily living EXCEPT",
    "options": ["Bathing", "Shopping", "Toileting", "Transferring"],
    "answer": "Shopping"
  },
  {
    "question": "An insured individual purchases a disability policy with a waiver of premium rider on January 1. The individual is disabled on June 1. On July 1, he receives proof of permanent and total disability, and submits a claim. He begins receiving benefits on July 15. When are his premiums waived?",
    "options": ["January 1", "June 1", "July 1", "July 15"],
    "answer": "July 1"
  },
  {
    "question": "The general enrollment period for Medicare Part B ends on",
    "options": ["March 31", "May 31", "June 30", "December 31"],
    "answer": "March 31"
  },
  {
    "question": "Which of the following describes the cause of a loss?",
    "options": ["Risk", "Hazard", "Peril", "Insurance"],
    "answer": "Peril"
  },
  {
    "question": "Under a multiple protection policy, the policy that pays on the death of the last person is called",
    "options": ["A universal life policy", "A survivorship life policy", "A joint life policy", "An annuity life policy"],
    "answer": "A survivorship life policy"
  },
  {
    "question": "In New York, who has the right to the nonforfeiture values in an annuity?",
    "options": ["Beneficiary", "Policyowner", "Insurer", "Employer"],
    "answer": "Policyowner"
  },
  {
    "question": "Generally, in life insurance policies, premiums can be collected under all of the following modes EXCEPT",
    "options": ["Annually", "Quarterly", "Semi-annually", "Bi-monthly"],
    "answer": "Bi-monthly"
  },
  {
    "question": "Group Disability Income Insurance usually involves",
    "options": ["Higher premiums than individual disability policies", "Providing benefits for nonoccupational illnesses and injuries", "A requirement that all employees participate", "Workers who are individually uninsurable because of their high-risk occupations"],
    "answer": "Providing benefits for nonoccupational illnesses and injuries"
  },
  {
    "question": "Shari receives monthly income from her life annuity. If Shari dies 36 months after the monthly annuity payments begin, the balance of the annuity fund is",
    "options": ["Forfeited to the insurer", "Guaranteed to continue for 5 years to the annuity's beneficiaries", "Tax-free income to the annuity's beneficiaries", "Awarded as a lump sum to the estate of the policyowner"],
    "answer": "Guaranteed to continue for 5 years to the annuity's beneficiaries"
  },
  {
    "question": "Which settlement option pays a benefit as long as one of the insureds is living?",
    "options": ["Joint Life", "Joint and Survivor", "Family Term", "Life Income"],
    "answer": "Joint and Survivor"
  },
  {
    "question": "The purpose of insurance is to",
    "options": ["Avoid risk", "Reduce risk", "Transfer risk", "Increase risk"],
    "answer": "Transfer risk"
  },
  {
    "question": "Policy proceeds can be obtained in a lump sum and invested to create",
    "options": ["A Cleanup Fund", "A Readjustment Fund", "A Viatical Settlement", "An Estate"],
    "answer": "A Cleanup Fund"
  },
    {
    question: "Which of the following actions is NOT considered the Business of Life Settlements?",
    options: [
      "Soliciting a life settlement contract from out of state",
      "Negotiating a life settlement contract through a life settlement broker",
      "Issuing a life settlement contract by mail",
      "Assigning a life settlement contract as a collateral loan"
    ],
    answer: "Assigning a life settlement contract as a collateral loan"
  },
  {
    question: "Which of the following is a basic benefit of Medicare Supplemental insurance?",
    options: [
      "First 3 pints of blood each year",
      "At-home recovery",
      "Basic drugs limit of $1,250",
      "Preventive care"
    ],
    answer: "First 3 pints of blood each year"
  },
  {
    question: "Which of the following is a common limitation in many major medical policies?",
    options: [
      "Skilled nursing",
      "Injuries received at work",
      "Preventive health services",
      "Injuries received while playing recreational sports"
    ],
    answer: "Preventive health services"
  },
  {
    question: "Which of the following is NOT a requirement to become a resident producer in New York?",
    options: [
      "Live in New York for a period of 6 months or more",
      "Successfully passing a licensing examination",
      "Be at least 18 years of age",
      "Be competent and trustworthy"
    ],
    answer: "Be competent and trustworthy"
  },
  {
    question: "Medicare Supplement policy must NOT contain benefits which",
    options: [
      "Charge additional premiums",
      "Duplicate Medicare benefits",
      "Cover more than Medicare coverage",
      "Are covered by Workers Compensation"
    ],
    answer: "Are covered by Workers Compensation"
  },
  {
    question: "The policy provision describing the responsibilities of the master policyowner is in",
    options: [
      "Group health policies",
      "Certificate of coverage",
      "Individual health policies",
      "Individual medical policies"
    ],
    answer: "Group health policies"
  },
  {
    question: "Which of the following allows for a multiple of the face amount to be paid if the insured dies because of an accident?",
    options: [
      "Accidental death benefit",
      "Accelerated death benefit",
      "Term rider",
      "Cost of living rider"
    ],
    answer: "Accidental death benefit"
  },
  {
    question: "Which of the following is NOT an Essential Health Benefit Category under the Affordable Care Act?",
    options: [
      "Emergency Services",
      "Laboratory Services",
      "Alternative Medicine",
      "Maternity and Newborn Care"
    ],
    answer: "Alternative Medicine"
  },
  {
    question: "Someone who sells, solicits, or negotiates insurance contracts for compensation is called",
    options: [
      "An independent insurance adjuster",
      "An insurance producer",
      "An insurance adviser",
      "A life insurer"
    ],
    answer: "An insurance producer"
  },
  {
    question: "In a hospital indemnity plan, an elimination period refers to the number of days",
    options: [
      "For which the insured can receive benefits for each hospital visit",
      "For which the insured can receive benefits for the term of the plan",
      "An insured must wait before becoming eligible to receive benefits for the term of the plan",
      "An insured must wait before becoming eligible to receive benefits for each hospital stay"
    ],
    answer: "An insured must wait before becoming eligible to receive benefits for each hospital stay"
  },
  {
    question: "Which of the following types of benefits are provided under MOST long-term care policies?",
    options: [
      "Fixed dollar amount for each day of care",
      "A specific benefit type based on the type of services rendered",
      "All physician-approved necessary medical expenses",
      "All fluctuating dollar amount based on duration and type of care provided"
    ],
    answer: "A specific benefit type based on the type of services rendered"
  },
  {
    question: "A policyowner suffers an injury that renders him incapable of performing one or more important job duties. Any decrease in income resulting from his injury would make him eligible for benefits under which provision?",
    options: [
      "Partial disability",
      "Nondisabling injury",
      "Presumptive disability",
      "Flat amount disability"
    ],
    answer: "Partial disability"
  },
  {
    question: "The type of life insurance generally used to cover key employee indemnification are",
    options: [
      "Universal, term, and whole life insurance",
      "Joint, permanent, and credit life insurance",
      "Limited-pay, adjustable, and group life insurance",
      "Decreasing term life insurance"
    ],
    answer: "Limited-pay, adjustable, and group life insurance"
  },
  {
    question: "With respect to small group health benefit plans, a carrier may discontinue coverage or may refuse to renew such a plan if the employer",
    options: [
      "Employs fewer than 15 full-time employees",
      "Has filed for bankruptcy in the prior year",
      "Has a supplemental plan with a competing carrier",
      "Fails to pay the premium prior to the end of the grace period"
    ],
    answer: "Fails to pay the premium prior to the end of the grace period"
  },
  {
    question: "Sam gets a new job with a small employer and enrolls in a health benefit plan that includes dependent coverage. Sam's 6-year-old daughter has Type-1 Diabetes and is on an insulin pump. When will claims related to her pre-existing condition be covered?",
    options: [
      "Immediately",
      "After a waiting period of 90 days",
      "After a waiting period of 12 months",
      "After proving she has been complication free for 6 months"
    ],
    answer: "After proving she has been complication free for 6 months"
  },
  {
    question: "If the premium is not paid at the time of application, a Statement of Good Health MUST be signed by the policyowner at the time of",
    options: [
      "The medical examination",
      "Underwriter review",
      "Policy delivery",
      "Application"
    ],
    answer: "Application"
  },
  {
    question: "Social Security Total Disability is the inability to engage in any gainful activity due to physical or mental disability for AT LEAST how many months?",
    options: ["3 months", "6 months", "12 months", "18 months"],
    answer: "12 months"
  }

  
  
  
];

const quizData = [...(Array.isArray(originalQuizData) ? originalQuizData : [])].sort(() => Math.random() - 0.5);


export default function QuizApp() {
  const [authenticated, setAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(quizData.length).fill(null));
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const selectedAnswer = selectedAnswers[currentQuestion];
  const feedback = selectedAnswer
    ? selectedAnswer === quizData[currentQuestion].answer
      ? "Correct!"
      : "Incorrect."
    : null;
  const correctAnswer =
    selectedAnswer !== null && selectedAnswer !== quizData[currentQuestion].answer
      ? quizData[currentQuestion].answer
      : null;

  const handleLogin = () => {
    if (inputPassword === PASSWORD) {
      setAuthenticated(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  const handleSelect = (option) => {
    if (selectedAnswers[currentQuestion] !== null) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = option;
    setSelectedAnswers(newAnswers);
    if (option === quizData[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  if (!authenticated) {
    return (
      <div className="p-6 max-w-md mx-auto text-center">
        <h2 className="text-xl font-bold mb-4">Enter Quiz Password</h2>
        <input
          type="password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full mb-4"
          placeholder="Enter password"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Enter
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Insurance Exam Quiz</h1>

      {showSummary ? (
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Quiz Complete!</h2>
          <p className="mb-2">You got {score} out of {quizData.length} correct.</p>
          <p className="text-lg font-bold">Score: {Math.round((score / quizData.length) * 100)}%</p>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-xl shadow-md mb-4">
          <p className="font-semibold mb-4">Question {currentQuestion + 1} of {quizData.length}</p>
          <p className="text-xl mb-6">{quizData[currentQuestion].question}</p>
          <div className="space-y-2">
            {quizData[currentQuestion].options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleSelect(option)}
                disabled={selectedAnswers[currentQuestion] !== null}
                className={`w-full text-left px-4 py-2 rounded border ${
                  selectedAnswer === option
                    ? option === quizData[currentQuestion].answer
                      ? "bg-green-100 border-green-500"
                      : "bg-red-100 border-red-500"
                    : "bg-white hover:bg-gray-100 border-gray-300"
                }`}
              >
                {selectedAnswer !== null && quizData[currentQuestion].answer === option && (
                  <span className="text-green-500 mr-2">✅</span>
                )}
                {selectedAnswer !== null && selectedAnswer === option && selectedAnswer !== quizData[currentQuestion].answer && (
                  <span className="text-red-500 mr-2">❌</span>
                )}
                {String.fromCharCode(65 + i)}. {option}
              </button>
            ))}
          </div>

          {feedback && (
            <p className={`mt-4 font-medium ${feedback === "Correct!" ? "text-green-600" : "text-red-600"}`}>
              {feedback}
            </p>
          )}
          {correctAnswer && (
            <p className="mt-2 text-green-600 font-medium">
              Correct answer: {correctAnswer}
            </p>
          )}

          <div className="flex justify-between mt-6">
            {currentQuestion > 0 && (
              <button
                onClick={handlePrevious}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Previous
              </button>
            )}
            {selectedAnswer && (
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleNext}
              >
                {currentQuestion < quizData.length - 1 ? "Next Question" : "Finish Quiz"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
