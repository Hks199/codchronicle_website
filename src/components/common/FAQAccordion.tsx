import { Plus } from "lucide-react";
import { faqs } from "../../data/faqs";
export default function FAQAccordion({
  questions = faqs,
}: {
  questions?: typeof faqs;
}) {
  return (
    <div className="faq-list">
      {questions.map((q) => (
        <details key={q.question}>
          <summary>
            {q.question}
            <Plus size={18} />
          </summary>
          <p>{q.answer}</p>
        </details>
      ))}
    </div>
  );
}
