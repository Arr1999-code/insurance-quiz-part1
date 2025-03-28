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
  
  
  
];

const quizData = [...originalQuizData].sort(() => Math.random() - 0.5);

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
                disabled={selectedAnswer !== null}
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
