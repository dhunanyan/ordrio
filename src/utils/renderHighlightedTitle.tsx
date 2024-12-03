import { motion } from "framer-motion";

export const renderHighlightedTitle = (title: string, delay: number = 0) =>
  title.split(/(<span>.*?<\/span>)/g).map((part, index) =>
    !part.startsWith("<span>") || !part.endsWith("</span>") ? (
      part
    ) : (
      <span key={index}>
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.5, delay: 0.3 + delay }}
          viewport={{ once: true }}
        />
        {part.replace(/<\/?span>/g, "")}
      </span>
    )
  );
