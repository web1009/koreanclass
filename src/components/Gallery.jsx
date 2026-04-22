import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'Is it really free?',
      answer: "Yes, it's 100% free and conducted online. We believe in providing Korean education without charge, so we don't charge either."
    },
    {
      id: 2,
      question: 'How does it work?',
      answer: 'All classes are conducted via Zoom. So you need to download the Zoom app.'
    },
    {
      id: 3,
      question: 'What language are the classes conducted in?',
      answer: 'All classes are conducted in English.'
    },
    {
      id: 4,
      question: "I don't know anything about Korean. Is that okay?",
      answer: 'We teach from basics to advanced step by step, and there are assignments for review, so you don\'t need to worry at all.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="gallery" className="faq-section">
      <div className="container">
        <div className="faq-header">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Find answers to the most commonly asked questions
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="faq-item">
              <button
                className={`faq-question ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="faq-question-text">{faq.question}</span>
                <i className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'}`}></i>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
