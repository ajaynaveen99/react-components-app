import { useState } from "react";
import AccordionItem from "./AccordionItem";
import { Link } from "react-router-dom";

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion" id="accordionExample">
      <ul><li> <Link to="/example-two">Accordion Example-two</Link></li></ul>
     
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => toggleItem(index)}
        />
      ))}
    </div>
  );
}

export default Accordion;
