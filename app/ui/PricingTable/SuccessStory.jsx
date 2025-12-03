"use client";

import { useState } from "react";
import { GrAchievement } from "react-icons/gr";

const successStories = {
  "AI-Based Road & Tree Segmentation": {
    title: "AI-Based Road and Tree Segmentation Service for Map Services",
    requirement:
      "A client in the map services industry had a service to automatically identify and extract roads and trees from their Geospatial and Aerial Survey (GAS) data. The process involved human operators going through thousands of GeoSpatial data and manually highlighting roads and tree crown segments. This process was manual, making it slow, expensive, and difficult to scale. Client wanted to scale up rapidly across regions and this was becoming a bottleneck. They wanted an automated solution that could accurately segment roads and tree crown, saving time and reducing costs while making their service more scalable.",
    approach:
      "To solve this, we first used publicly available opensource datasets related to geospatial segmentation. However, these datasets were not enough for training custom AI models to meet the specific needs, so we created a hybrid dataset. The dataset contained the opensource images along with their segmentation maps and previous manually segmented images.\nTo improve accuracy and generalisation of the model, we used data augmentation techniques and Generative Adversarial Networks (GANs) as a pipeline to generate additional training images.\nWe then built custom Convolutional Neural Network (CNN) model from scratch and trained them using AWS sage maker. After training the model on both public and custom datasets, we deployed it on AWS Cloud as a micro service using sage maker and EKS, making it easily accessible and scalable for the client.\nThe model was retrained and fine-tuned every weekend on new data created by human operators to optimize its performance.",
    outcome:
      "The model has reached an optimised level where it was producing highly accurate segmentation maps. Our micro services application completely automated the client’s workflow, and completely eliminated manual generation. This allowed the client to expand their services globally across three regions in a year. They were able to scale it for different terrains and very high spatial resolutions (till 0.1m).",
  },
  "AI in Grocery E-Commerce": {
    title: "Revolutionizing the Grocery E-Commerce Experience with AI",
    requirement:
      "The client wanted to enhance their online grocery shopping experience by integrating an intelligent recommendation system and a customer support chatbot. The aim was to improve user engagement, increase sales, and streamline customer service while making the solution scalable and easy to maintain.",
    approach:
      "Understanding that personalized shopping experiences significantly improve conversion rates and customer loyalty, we designed a recommendation system tailored to the client's grocery offerings. The system utilized a combination of collaborative filtering and content-based recommendation models, customized with publicly available machine learning models.\nWe analyzed purchase history, browsing patterns, and user preferences to gather valuable insights and compiled a dataset from that data. We used a pre-trained collaborative filtering model Amazon Personalize, which we customized to fit the client’s specific grocery catalog and customer behavior data. This allowed for real-time, personalized product suggestions based on each user's shopping history and preferences. We integrated feedback loops to continually improve the recommendation system as more customer data was collected, ensuring recommendations evolved with the customer’s changing needs.\nCustomer inquiries about products, delivery schedules, and order status were handled by an AI-driven chatbot that was seamlessly integrated into the client's website. We used Amazon Lex, a service that provides deep learning-based natural language understanding, to build the chatbot. Lex was trained on historical customer support data, product Q&A, FAQs and comments to understand a variety of customer queries related to grocery products, availability, and store policies. By integrating Amazon Connect for managing customer interactions, we ensured a smooth flow of conversation, allowing customers to receive instant answers without human intervention. The AI models and APIs were packaged into Docker containers and were deployed using AWS EKS.",
    outcome:
      "After implementing the recommendation system and chatbot, the client experienced significant improvements in key business metrics:\n\n- Increased Conversion Rates: The personalized recommendation engine drove higher conversion rates by offering relevant products to customers at the right moment.\n- Improved Customer Engagement: The AI-powered chatbot provided instant support, answering questions and resolving issues without the need for human intervention.\n- Cost Savings and Efficiency: By automating customer support with the chatbot, the client reduced the need for additional customer service agents, leading to substantial savings in operational costs.\n- Better Decision-Making: The recommendation system provided the client with valuable insights into customer preferences and trends, enabling them to optimize inventory, marketing campaigns, and promotions.\n- Enhanced Customer Satisfaction and Retention: With a more personalized shopping experience and faster, more efficient customer support, customer satisfaction increased.",
  },
};

export default function SuccessStoryTabs() {
  const [activeTab, setActiveTab] = useState(Object.keys(successStories)[0]);

  return (
    <div style={{ padding: "20px", textAlign: "center", color: "white" }}>
      <h2>Success Story</h2>
      <div style={{ marginBottom: "20px" }}>
        {Object.keys(successStories).map((story) => (
          <button
            key={story}
            onClick={() => setActiveTab(story)}
            style={{
              padding: "10px 20px",
              margin: "5px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              backgroundColor: activeTab === story ? "#3B82F6" : "#4B5563",
              color: "white",
              fontSize: "16px",
            }}
          >
            {story}
          </button>
        ))}
      </div>
      <div
        style={{
          backgroundColor: "#1F2937",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "80%",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        <h3
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "24px",
          }}
        >
          <GrAchievement style={{ fontSize: "32px", color: "#10B981" }} />
          {successStories[activeTab].title}
        </h3>
        <hr style={{ border: "1px solid #4B5563", margin: "15px 0" }} />
        <h4 style={{ fontSize: "20px", fontWeight: "bold" }}>
          Project Requirement
        </h4>
        <p style={{ fontSize: "16px", marginBottom: "15px" }}>
          {successStories[activeTab].requirement}
        </p>
        <h4 style={{ fontSize: "20px", fontWeight: "bold" }}>Our Approach</h4>
        <p style={{ fontSize: "16px", marginBottom: "15px" }}>
          {successStories[activeTab].approach}
        </p>
        <h4 style={{ fontSize: "20px", fontWeight: "bold" }}>
          Outcome and Impact
        </h4>
        <p style={{ fontSize: "16px" }}>{successStories[activeTab].outcome}</p>
      </div>
    </div>
  );
}
