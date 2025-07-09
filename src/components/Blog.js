import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
  const posts = [
    {
      title: "Stay Consistent",
      snippet: "Success comes from showing up daily — even when it's hard."
    },
    {
      title: "Discipline Beats Motivation",
      snippet: "When motivation fades, discipline keeps you going."
    },
    {
      title: "Your Effort Matters",
      snippet: "You might not see progress every day, but your effort compounds."
    },
    {
      title: "Believe in Yourself",
      snippet: "Confidence comes from small daily victories. Keep going."
    },
    {
      title: "Progress Over Perfection",
      snippet: "Start before you're ready. Improving is part of the process."
    }
  ];

  return (
    <motion.section 
      className="blog-section"
      id="blog"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2>Blog</h2>
      <div className="blog-grid">
        {posts.map((post, index) => (
          <motion.div
            className="blog-card"
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>{post.title}</h3>
            <p>{post.snippet}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Blog;
