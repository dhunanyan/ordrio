export enum FAQType {
  GENERAL = "general",
  PRICING = "pricing",
  DASHBOARD = "dashboard",
  MARKETING = "marketing",
  SHIPPING = "shipping",
  STORE_MANAGEMENT = "store-management",
}

export const FaqTypeText = {
  general: "General",
  pricing: "Pricing",
  dashboard: "Dashboard",
  marketing: "Marketing",
  shipping: "Shipping",
  "store-management": "Store management",
};

export const AccordionsContent = {
  accordions: [
    {
      title: "What features does Ordrio offer?",
      description:
        "Ordrio offers a comprehensive suite of features including store setup, sales management, shipping integration, customer engagement tools, and mobile app connectivity.",
      type: "general",
    },
    {
      title: "How do I set up my online store with Ordrio?",
      description:
        "Setting up your store with Ordrio is easy. Use our intuitive setup wizard to create a professional online store, customize your design, add products, and configure payment and shipping settings—all without any coding expertise.",
      type: "general",
    },
    {
      title: "Can I integrate Ordrio with my existing website?",
      description:
        "Absolutely! Ordrio offers seamless integration with existing websites, enabling you to add advanced e-commerce functionalities such as a shopping cart, inventory tracking, and order management to your current platform.",
      type: "general",
    },
    {
      title: "What kind of customer support does Ordrio provide?",
      description:
        "Ordrio provides 24/7 customer support through multiple channels including live chat, email, and a robust knowledge base. Our dedicated team ensures timely assistance for any issues or questions you may have.",
      type: "general",
    },
    {
      title: "What are the pricing plans for Ordrio?",
      description:
        "Ordrio offers flexible pricing plans tailored to different business needs, including a basic starter plan and advanced options with premium features. Contact our team for a detailed quote or visit our pricing page to compare plans.",
      type: "general",
    },
    {
      title: "How secure is Ordrio?",
      description:
        "Security is a top priority at Ordrio. We employ advanced encryption, PCI-compliant payment gateways, and robust data protection measures to ensure your business and customer data remain safe at all times.",
      type: "general",
    },

    {
      title: "What pricing plans does Ordrio offer?",
      description:
        "Ordrio provides multiple pricing plans to suit businesses of all sizes. Choose from our Lite, Pro, and Enterprise plans, each designed with specific features and order volume needs. Custom plans are also available for large-scale operations.",
      type: "pricing",
    },
    {
      title: "Are there any setup charges?",
      description:
        "Yes, setup charges apply to Lite and Basic plans, covering the first year's configuration and onboarding support. Our Pro and Enterprise plans may include customized setup fees based on specific requirements.",
      type: "pricing",
    },
    {
      title: "What is included in the free trial?",
      description:
        "The free trial offers full access to Ordrio's core features, including store customization, order management, and analytics, allowing you to experience the platform before committing to a plan.",
      type: "pricing",
    },
    {
      title: "Are there additional costs for extra order credits?",
      description:
        "Yes, extra order credits can be purchased as needed, ensuring smooth operations even during high-demand periods. This flexibility helps you scale your business without disruptions.",
      type: "general",
    },
    {
      title: "Is Ordrio pricing flexible for seasonal businesses?",
      description:
        "Absolutely! Ordrio offers seasonal flexibility by allowing you to scale up or down based on your business needs. You can adjust your plan to align with peak seasons or quieter periods.",
      type: "pricing",
    },
    {
      title: "Do I get discounts for annual subscriptions?",
      description:
        "Yes, Ordrio provides significant discounts for annual subscriptions, giving you better value compared to monthly billing. Contact our sales team to learn more about special offers.",
      type: "pricing",
    },

    {
      title: "What is the Ordrio Dashboard?",
      description:
        "The Ordrio Dashboard is your centralized hub for managing your online store. It provides an intuitive interface to track orders, manage inventory, analyze sales data, and customize your store settings with ease.",
      type: "dashboard",
    },
    {
      title: "Can I monitor my store’s performance from the dashboard?",
      description:
        "Yes, the dashboard includes robust analytics tools that offer insights into sales trends, customer behavior, and inventory levels, helping you make data-driven decisions to grow your business.",
      type: "dashboard",
    },
    {
      title: "Does the dashboard support multiple users?",
      description:
        "Absolutely! You can create multiple user profiles with customizable permissions, enabling your team to manage specific aspects of your store while maintaining control over sensitive information.",
      type: "dashboard",
    },
    {
      title: "How can I manage inventory using the dashboard?",
      description:
        "The dashboard allows you to track inventory in real time, set low-stock alerts, and manage restocking efficiently. You can also categorize products for better organization and faster navigation.",
      type: "dashboard",
    },
    {
      title: "Can I access the dashboard on mobile devices?",
      description:
        "Yes, the Ordrio Dashboard is mobile-friendly, ensuring you can manage your store on the go. For added convenience, you can also access key features through our mobile app.",
      type: "dashboard",
    },
    {
      title: "Is training available for using the dashboard?",
      description:
        "Yes, we provide comprehensive onboarding sessions and tutorial videos to help you and your team master the dashboard quickly. Our support team is also available 24/7 for assistance.",
      type: "dashboard",
    },

    {
      title: "What marketing tools does Ordrio provide?",
      description:
        "Ordrio offers built-in marketing tools, including email campaigns, promotional discounts, social media integrations, and targeted advertisements to help you reach more customers and boost sales.",
      type: "marketing",
    },
    {
      title: "Can I run promotions and discounts through Ordrio?",
      description:
        "Yes, you can easily create and manage promotions, discounts, and coupon codes directly from the platform. Track their performance to see how they impact your sales and customer engagement.",
      type: "marketing",
    },
    {
      title: "Does Ordrio help with customer retention?",
      description:
        "Absolutely! Ordrio's CRM and customer engagement tools allow you to analyze customer behavior, send personalized offers, and build loyalty programs to keep your customers coming back.",
      type: "marketing",
    },
    {
      title: "How does Ordrio integrate with social media for marketing?",
      description:
        "Ordrio integrates seamlessly with social media platforms, enabling you to showcase products, run targeted ads, and track performance directly from your dashboard. This helps you connect with your audience effectively.",
      type: "marketing",
    },
    {
      title: "Can I access analytics for my marketing campaigns?",
      description:
        "Yes, Ordrio provides detailed analytics to measure the success of your campaigns. Monitor metrics such as clicks, conversions, and ROI to refine your strategies and optimize performance.",
      type: "marketing",
    },
    {
      title: "Does Ordrio offer SEO tools for my store?",
      description:
        "Yes, Ordrio includes SEO optimization features such as customizable meta tags, keyword integration, and performance tracking to help your store rank higher on search engines and attract organic traffic.",
      type: "marketing",
    },

    {
      title: "What shipping options does Ordrio support?",
      description:
        "Ordrio integrates with multiple shipping carriers, allowing you to offer standard, expedited, and international shipping options. You can also set custom rates based on weight, location, or order value.",
      type: "shipping",
    },
    {
      title: "Can I track shipments using Ordrio?",
      description:
        "Yes, Ordrio provides real-time shipment tracking for you and your customers. Easily monitor the status of deliveries directly from your dashboard and send automated updates to your customers.",
      type: "shipping",
    },
    {
      title: "How does Ordrio handle shipping rates?",
      description:
        "Ordrio allows you to configure shipping rates manually or use live carrier rates. You can set flat rates, offer free shipping for specific order values, or let the system calculate rates dynamically based on carrier APIs.",
      type: "shipping",
    },
    {
      title: "Does Ordrio support international shipping?",
      description:
        "Absolutely! Ordrio supports international shipping by integrating with global carriers. You can also manage customs documentation and set region-specific shipping rules for seamless international transactions.",
      type: "shipping",
    },
    {
      title: "Can I offer free shipping through Ordrio?",
      description:
        "Yes, you can easily set up free shipping for specific products, order values, or promotional periods. This feature helps increase customer satisfaction and drive higher sales volumes.",
      type: "shipping",
    },
    {
      title: "How do I manage returns and refunds with Ordrio?",
      description:
        "Ordrio simplifies returns and refunds by providing tools to track return requests, manage restocking, and issue refunds efficiently. Automate notifications to keep customers informed throughout the process.",
      type: "shipping",
    },

    {
      title: "How do I set up my store on Ordrio?",
      description:
        "Setting up your store is simple with Ordrio’s step-by-step guide. Add your products, customize your store design, and configure essential settings like payment gateways and shipping preferences—all in one place.",
      type: "store-management",
    },
    {
      title: "Can I customize the design of my store?",
      description:
        "Yes, Ordrio offers a variety of themes and a drag-and-drop editor for customization. Adjust layouts, colors, and branding elements to create a unique and professional-looking storefront.",
      type: "store-management",
    },
    {
      title: "Does Ordrio support multi-store management?",
      description:
        "Absolutely! You can manage multiple stores under a single account. Track individual store performance, inventory, and orders seamlessly through the unified dashboard.",
      type: "store-management",
    },
    {
      title: "Can I sell both physical and digital products on my store?",
      description:
        "Yes, Ordrio supports both physical and digital products. Manage inventory for tangible items or provide secure downloads for digital goods with ease.",
      type: "store-management",
    },
    {
      title: "Is my store mobile-friendly?",
      description:
        "Yes, all Ordrio stores are designed to be fully responsive, ensuring an optimal shopping experience on desktops, tablets, and smartphones. Your customers can shop anywhere, anytime.",
      type: "store-management",
    },
    {
      title: "How do I manage inventory in my store?",
      description:
        "Ordrio provides robust inventory management tools. Track stock levels in real time, set low-stock alerts, and manage product categories to keep your store organized and running smoothly.",
      type: "store-management",
    },

    {
      title: "How does Ordrio help with business management?",
      description:
        "Ordrio streamlines business operations with tools for order management, inventory tracking, customer relationship management (CRM), and detailed analytics. Manage every aspect of your business efficiently from one centralized platform.",
      type: "store-management",
    },
    {
      title: "Can I track sales and revenue in real time?",
      description:
        "Yes, Ordrio offers real-time tracking of sales, revenue, and other key metrics. Use customizable reports to gain insights into your store's performance and identify growth opportunities.",
      type: "store-management",
    },
    {
      title: "Does Ordrio support team management?",
      description:
        "Absolutely! Ordrio allows you to create user accounts with role-based permissions, ensuring your team members can focus on their tasks while maintaining data security and streamlined workflows.",
      type: "store-management",
    },
    {
      title: "Can I manage customer relationships with Ordrio?",
      description:
        "Yes, Ordrio features a robust CRM that helps you manage customer interactions, track purchase history, and engage with your audience through personalized offers and communications.",
      type: "store-management",
    },
    {
      title: "Does Ordrio integrate with other management tools?",
      description:
        "Ordrio integrates seamlessly with third-party tools such as accounting software, shipping providers, and marketing platforms, enabling smooth synchronization across all your business operations.",
      type: "store-management",
    },
    {
      title: "Can I automate tasks with Ordrio?",
      description:
        "Yes, Ordrio includes automation features for routine tasks like order processing, stock updates, and email notifications, saving you time and reducing errors in daily operations.",
      type: "store-management",
    },
  ],
};
