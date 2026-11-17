import Link from "next/link";
import type { FaqItem } from "@/types/content";

/** FAQ copy for Indian Lawyers Melbourne hub (UI + FAQPage schema). */
export const indianLawyersMelbourneFaqs: FaqItem[] = [
  {
    question: "Can I divorce in Australia if I married in India?",
    answer:
      "Yes, if the marriage is recognised and an Australian court has jurisdiction. A marriage that was valid in India is generally recognised here. You can apply after 12 months of separation. At least one spouse must be an Australian citizen, domiciled in Australia, or ordinarily resident in Australia for the 12 months before filing. The divorce ends the marriage only. Parenting arrangements and property settlement are separate.",
    answerText:
      "Yes, if the marriage is recognised and an Australian court has jurisdiction. A marriage that was valid in India is generally recognised here. You can apply after 12 months of separation. At least one spouse must be an Australian citizen, domiciled in Australia, or ordinarily resident in Australia for the 12 months before filing. The divorce ends the marriage only. Parenting arrangements and property settlement are separate.",
  },
  {
    question: "Will Australia recognise a divorce I got in India?",
    answer:
      "Often, but not automatically. Australian law recognises overseas divorces in some situations. One example is where you or your spouse lived in, was a citizen of, or had a real connection to the country that granted it. Recognition can be refused if the process was unfair. Bring the divorce papers and we'll check where you stand.",
    answerText:
      "Often, but not automatically. Australian law recognises overseas divorces in some situations. One example is where you or your spouse lived in, was a citizen of, or had a real connection to the country that granted it. Recognition can be refused if the process was unfair. Bring the divorce papers and we'll check where you stand.",
  },
  {
    question: "Is my property in India included in an Australian property settlement?",
    answer:
      "It can be. When the Federal Circuit and Family Court of Australia decides a property settlement, it looks at the property of both parties, including assets outside Australia. A house, land or business interest in India can be taken into account. The order binds the spouses. It does not, by itself, change the title records in India. A transfer or sale there can still require steps under Indian law.",
    answerText:
      "It can be. When the Federal Circuit and Family Court of Australia decides a property settlement, it looks at the property of both parties, including assets outside Australia. A house, land or business interest in India can be taken into account. The order binds the spouses. It does not, by itself, change the title records in India. A transfer or sale there can still require steps under Indian law.",
  },
  {
    question: "How long do I have to apply for a property settlement after a divorce?",
    answer:
      "Married couples generally have 12 months from the date the divorce order takes effect. De facto couples generally have two years from the end of the relationship. Applying late is sometimes possible, but you'll need the court's permission. It's better to get advice early than to leave it until the deadline is close.",
    answerText:
      "Married couples generally have 12 months from the date the divorce order takes effect. De facto couples generally have two years from the end of the relationship. Applying late is sometimes possible, but you'll need the court's permission. It's better to get advice early than to leave it until the deadline is close.",
  },
  {
    question: "Do I have to try mediation before going to court about the children?",
    answer:
      "In most cases, yes. Parents generally have to try family dispute resolution before asking a court for parenting orders. The exceptions are urgent matters and cases involving family violence. If you reach an agreement, we can help turn it into consent orders. If you don't, we'll talk you through what comes next.",
    answerText:
      "In most cases, yes. Parents generally have to try family dispute resolution before asking a court for parenting orders. The exceptions are urgent matters and cases involving family violence. If you reach an agreement, we can help turn it into consent orders. If you don't, we'll talk you through what comes next.",
  },
  {
    question: "How do I resolve a dispute with my business partner?",
    answer:
      "Start with the agreement and the accounts. A partnership agreement, a shareholders agreement, the company register and the payment records show who owns the business and what was promised. Many disputes settle by negotiation or a buy-out once those facts are on the table. If they do not, the next step may be a letter of demand, mediation, or a claim in VCAT or a court, depending on the amount and the type of dispute. Get advice before you move money out of the business or resign as a director.",
    answerText:
      "Start with the agreement and the accounts. A partnership agreement, a shareholders agreement, the company register and the payment records show who owns the business and what was promised. Many disputes settle by negotiation or a buy-out once those facts are on the table. If they do not, the next step may be a letter of demand, mediation, or a claim in VCAT or a court, depending on the amount and the type of dispute. Get advice before you move money out of the business or resign as a director.",
  },
  {
    question: "What if our family business never had a written partnership agreement?",
    answer:
      "You still have options. We look at how the business really ran: who put money in, who took money out, what the messages say and what the company records show. From there, we can advise whether to negotiate a buy-out, send a letter of demand or take it further.",
    answerText:
      "You still have options. We look at how the business really ran: who put money in, who took money out, what the messages say and what the company records show. From there, we can advise whether to negotiate a buy-out, send a letter of demand or take it further.",
  },
  {
    question: "Do I need a separate will for my assets in India?",
    answer:
      "Often, yes, if you own land or other immovable property in India. That property is governed by the law of the place where it sits. A will made only in Australia is not always the document an Indian registry, bank or court will act on, and a later Indian will can revoke the Australian will if the revocation clause is too wide. We draft the two so they work together. What you can leave in India also depends on the succession rules for your religion.",
    answerText:
      "Often, yes, if you own land or other immovable property in India. That property is governed by the law of the place where it sits. A will made only in Australia is not always the document an Indian registry, bank or court will act on, and a later Indian will can revoke the Australian will if the revocation clause is too wide. We draft the two so they work together. What you can leave in India also depends on the succession rules for your religion.",
  },
  {
    question: "Can I challenge a will if a family member was left out?",
    answer:
      "Possibly. In Victoria, eligible people can ask the court for further provision from the estate by making a family provision application. The usual time limit is six months from the grant of probate, so don't wait. Whether you qualify depends on your relationship to the person who died and the circumstances.",
    answerText:
      "Possibly. In Victoria, eligible people can ask the court for further provision from the estate by making a family provision application. The usual time limit is six months from the grant of probate, so don't wait. Whether you qualify depends on your relationship to the person who died and the circumstances.",
  },
  {
    question: "What's the difference between a will and a power of attorney?",
    answer:
      "A will takes effect after you die. A power of attorney works while you're alive. In Victoria, an enduring power of attorney lets someone make financial and personal decisions for you, even if you later lose capacity. If you own assets in two countries, you may need more than one document. Our wills lawyers can go through what suits you.",
    answerText:
      "A will takes effect after you die. A power of attorney works while you're alive. In Victoria, an enduring power of attorney lets someone make financial and personal decisions for you, even if you later lose capacity. If you own assets in two countries, you may need more than one document. Our wills lawyers can go through what suits you.",
  },
  {
    question: "Can a relative in India look after my property there while I'm in Australia?",
    answer: (
      <>
        Usually, yes, through a power of attorney written for that specific job, like a sale or a lease. How
        it&apos;s signed, certified and used in India depends on the transaction, so we draft it with that in mind. You
        may also need an Indian lawyer to confirm the local steps. There&apos;s more on how an{" "}
        <Link href="/property-lawyers-melbourne/indian-power-of-attorney-lawyer-melbourne/">
          Indian power of attorney
        </Link>{" "}
        works.
      </>
    ),
    answerText:
      "Usually, yes, through a power of attorney written for that specific job, like a sale or a lease. How it's signed, certified and used in India depends on the transaction, so we draft it with that in mind. You may also need an Indian lawyer to confirm the local steps.",
  },
  {
    question: "Can I get advice in Hindi or Punjabi?",
    answer:
      "Yes. You can take advice in English, Hindi or Punjabi. That includes meetings at the Collins Street office and online consultations if you are elsewhere in Australia, or if family in India are joining the call. Court documents are still prepared in English.",
    answerText:
      "Yes. You can take advice in English, Hindi or Punjabi. That includes meetings at the Collins Street office and online consultations if you are elsewhere in Australia, or if family in India are joining the call. Court documents are still prepared in English.",
  },
  {
    question: "What documents should I bring to a consultation about a family business dispute?",
    answer:
      "Bring whatever you can find. That's usually partnership or shareholder agreements, company records, bank and accounting statements, contracts, invoices, and any emails or messages with the other side. A rough timeline helps too. If something's missing, come anyway and we'll tell you what to look for.",
    answerText:
      "Bring whatever you can find. That's usually partnership or shareholder agreements, company records, bank and accounting statements, contracts, invoices, and any emails or messages with the other side. A rough timeline helps too. If something's missing, come anyway and we'll tell you what to look for.",
  },
  {
    question: "Can I consult Bansal Lawyers if I live outside Melbourne?",
    answer:
      "Yes. We act for clients across Australia by phone or secure video, and we also advise overseas clients on Australian law. If you'd prefer to meet in person, you're welcome at our Collins Street office. Just tell us which you'd like when you book.",
    answerText:
      "Yes. We act for clients across Australia by phone or secure video, and we also advise overseas clients on Australian law. If you'd prefer to meet in person, you're welcome at our Collins Street office. Just tell us which you'd like when you book.",
  },
  {
    question: "Can family members in India participate in an online legal consultation?",
    answer:
      "Yes. They can join by phone or video from wherever they are. What you tell us is confidential, so we'll check who's on the call before we discuss your matter. Tell us when you book who'll be joining and we'll set it up.",
    answerText:
      "Yes. They can join by phone or video from wherever they are. What you tell us is confidential, so we'll check who's on the call before we discuss your matter. Tell us when you book who'll be joining and we'll set it up.",
  },
  {
    question: "How do I choose a lawyer for a legal matter involving Australia and India?",
    answer:
      "Find someone who knows Australian law well, explains things clearly and speaks your language. Ask, too, whether any part of your matter needs an Indian lawyer. Transferring title to property in India, for example, is usually handled there. A good lawyer will say so up front.",
    answerText:
      "Find someone who knows Australian law well, explains things clearly and speaks your language. Ask, too, whether any part of your matter needs an Indian lawyer. Transferring title to property in India, for example, is usually handled there. A good lawyer will say so up front.",
  },
  {
    question: "Do you act in criminal matters?",
    answer: (
      <>
        Yes. If you&apos;re looking for Indian criminal lawyers in Melbourne, our{" "}
        <Link href="/criminal-lawyers-melbourne/">criminal lawyers</Link> act for people facing criminal charges,
        traffic offences and police matters. That includes bail applications and breaches of intervention orders. If
        you&apos;ve got a court date or the police have contacted you, call us early.
      </>
    ),
    answerText:
      "Yes. If you're looking for Indian criminal lawyers in Melbourne, our criminal lawyers act for people facing criminal charges, traffic offences and police matters. That includes bail applications and breaches of intervention orders. If you've got a court date or the police have contacted you, call us early.",
  },
  {
    question: "Do my documents need to be translated into English?",
    answer:
      "If a document is in Hindi or Punjabi and will be used in court, it generally needs an English translation from a certified translator. Bring the originals to your first meeting and we'll tell you which ones need translating, so you don't pay for translations you won't use.",
    answerText:
      "If a document is in Hindi or Punjabi and will be used in court, it generally needs an English translation from a certified translator. Bring the originals to your first meeting and we'll tell you which ones need translating, so you don't pay for translations you won't use.",
  },
  {
    question: "How soon should I speak to a lawyer?",
    answer:
      "As early as you can. Some time limits are short, and a court date, a letter of demand or contact from the police shouldn't sit while you wait. You don't need to know exactly what you need before you call. Tell us what's happened and we'll point you to the right person on the team.",
    answerText:
      "As early as you can. Some time limits are short, and a court date, a letter of demand or contact from the police shouldn't sit while you wait. You don't need to know exactly what you need before you call. Tell us what's happened and we'll point you to the right person on the team.",
  },
];