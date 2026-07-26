import { useState } from "react";
import FrequentlyItems from "./FrequentlyItems";
import Button from "../Button";


export default function Frequently () {
  const [active, setActive] = useState(0);

  const faqs = [
    {
      question: "What is Clever's primary function?",
      answer:
        "Clever is a productivity and task management tool designed to streamline workflows, automate repetitive tasks, and improve collaboration for individuals and teams.",
    },
    {
      question: "How does Clever improve team collaboration?",
      answer:
        "It allows teams to share tasks, communicate in real time, and manage projects from one dashboard.",
    },
    {
      question: "Can I access Clever offline?",
      answer:
        "Yes. Some features are available offline and will sync automatically once you're connected to the internet.",
    },
    {
      question: "Is Clever available on mobile devices?",
      answer:
        "Yes. Clever works on Android, iOS, tablets, and desktop browsers.",
    },
    {
      question: "What security features does Clever offer?",
      answer:
        "We provide encrypted data storage, secure authentication, and regular backups to protect your information.",
    },
    {
      question: "How can I customize my workflows in Clever?",
      answer:
        "You can create custom workflows, automate actions, and personalize dashboards to fit your business needs.",
    },
    {
      question: "What integrations does Clever support?",
      answer:
        "Clever integrates with Slack, Google Drive, Microsoft Teams, Notion, Zapier, and many other services.",
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-5">

        <div className="text-center">

           <Button
        size="lg"rounded="full" variant="third"
        className="cursor-pointer ">Asked</Button>

          <h2 className="text-2xl md:text-5xl font-bold mt-6">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="mt-14 space-y-5 ">

          {faqs.map((faq, index) => (
            <FrequentlyItems
              key={index}
              faq={faq}
              isOpen={active === index}
              onClick={() =>
                setActive(active === index ? null : index)
              }
            />
          ))}

        </div>

      </div>
    </div>
  );
}