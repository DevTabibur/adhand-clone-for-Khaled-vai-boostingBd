"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Code,
  Database,
  Zap,
  Shield,
  Globe,
  BarChart3,
  Settings,
  ArrowRight,
  CheckCircle,
  Copy,
  ExternalLink,
} from "lucide-react";
import { Layout } from "@/components/Layout";

export default function APIPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  const containerVariants : any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants: any = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  const apiEndpoints : any= [
    {
      method: "GET",
      endpoint: "/api/v1/ad-accounts",
      description: "Retrieve all ad accounts",
      response: '{ "data": [{ "id": "123", "name": "AdHand Agency" }] }',
    },
    {
      method: "POST",
      endpoint: "/api/v1/campaigns",
      description: "Create new campaign",
      response: '{ "id": "456", "status": "active", "budget": 1000 }',
    },
    {
      method: "GET",
      endpoint: "/api/v1/insights",
      description: "Get campaign performance data",
      response: '{ "impressions": 50000, "clicks": 1250, "ctr": 2.5 }',
    },
    {
      method: "PUT",
      endpoint: "/api/v1/ad-sets/{id}",
      description: "Update ad set configuration",
      response: '{ "id": "789", "targeting": "updated", "budget": 500 }',
    },
  ];

  const features: any = [
    {
      icon: Database,
      title: "Ad Account Management",
      description:
        "Complete control over Facebook ad accounts, campaigns, and ad sets through our unified API interface.",
      color: "from-emerald-500 to-cyan-500",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description:
        "Access comprehensive performance metrics, insights, and reporting data in real-time.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Settings,
      title: "Asset Automation",
      description:
        "Automate creative asset management, audience targeting, and campaign optimization.",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Shield,
      title: "Secure Integration",
      description:
        "Enterprise-grade security with OAuth 2.0, rate limiting, and encrypted data transmission.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const codeExamples: any = {
    overview: `// Initialize AdHand Meta API Client
const adHand = new AdHandAPI({
  accessToken: 'your_access_token',
  apiVersion: 'v1.0',
  environment: 'production'
});

// Get all ad accounts
const accounts = await adHand.adAccounts.getAll();
console.log(accounts);`,

    campaigns: `// Create a new campaign
const campaign = await adHand.campaigns.create({
  name: 'Summer Sale 2024',
  objective: 'CONVERSIONS',
  status: 'ACTIVE',
  budget_amount: 1000,
  bid_strategy: 'LOWEST_COST_WITHOUT_CAP'
});

// Get campaign insights
const insights = await adHand.campaigns.getInsights(campaign.id, {
  fields: ['impressions', 'clicks', 'spend', 'ctr'],
  date_preset: 'last_7_days'
});`,

    assets: `// Upload creative assets
const creative = await adHand.assets.uploadImage({
  file: imageBuffer,
  name: 'summer-sale-banner.jpg',
  alt_text: 'Summer sale promotional banner'
});

// Create ad with uploaded asset
const ad = await adHand.ads.create({
  name: 'Summer Sale Ad',
  adset_id: 'your_adset_id',
  creative: {
    object_story_spec: {
      page_id: 'your_page_id',
      link_data: {
        image_hash: creative.hash,
        link: 'https://yourstore.com/sale',
        message: 'Don\'t miss our summer sale!'
      }
    }
  }
});`,

    insights: `// Advanced insights with custom metrics
const performanceData = await adHand.insights.getAdvanced({
  level: 'campaign',
  fields: [
    'campaign_name',
    'impressions',
    'clicks',
    'spend',
    'conversions',
    'cost_per_conversion',
    'return_on_ad_spend'
  ],
  breakdowns: ['age', 'gender', 'placement'],
  time_range: {
    since: '2024-01-01',
    until: '2024-01-31'
  },
  filtering: [{
    field: 'spend',
    operator: 'GREATER_THAN',
    value: 100
  }]
});`,
  };

  return (
    <>
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          {/* Floating Background Elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-10 blur-xl"
            />
            <motion.div
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: "2s" }}
              className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-10 blur-xl"
            />
            <motion.div
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: "4s" }}
              className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 blur-xl"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            {/* Hero Section */}
            <motion.section
              variants={itemVariants}
              className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"
            >
              <div className="max-w-7xl mx-auto text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm font-medium mb-8"
                >
                  <Code className="w-4 h-4 mr-2" />
                  Meta Marketing API Integration
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-4xl md:text-6xl font-bold mb-6"
                >
                  <span className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    Meta Marketing API
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">
                    For Ad Account Asset Management
                  </span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
                >
                  Powerful API integration for Facebook Ads management, campaign
                  optimization, and comprehensive asset control. Built for
                  agencies that demand precision and scale.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                  >
                    Get API Access
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300 flex items-center"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Documentation
                  </motion.button>
                </motion.div>

                {/* Stats */}
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
                >
                  {[
                    { label: "API Calls/Month", value: "10M+" },
                    { label: "Ad Accounts", value: "50K+" },
                    { label: "Uptime", value: "99.9%" },
                    { label: "Response Time", value: "<100ms" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
                    >
                      <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 mt-2">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.section>

            {/* Features Section */}
            <motion.section
              variants={itemVariants}
              className="py-20 px-4 sm:px-6 lg:px-8"
            >
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                  >
                    Comprehensive API Features
                  </motion.h2>
                  <motion.p
                    variants={itemVariants}
                    className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                  >
                    Everything you need to manage Facebook advertising campaigns
                    at scale
                  </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {features.map((feature: any, index: any) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="p-8 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6`}
                      >
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* API Documentation Section */}
            <motion.section
              variants={itemVariants}
              className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
            >
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                  >
                    API Documentation & Examples
                  </motion.h2>
                  <motion.p
                    variants={itemVariants}
                    className="text-xl text-gray-600 dark:text-gray-300"
                  >
                    Get started with our comprehensive API documentation and
                    code examples
                  </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Tab Navigation */}
                  <motion.div variants={itemVariants} className="lg:col-span-1">
                    <div className="sticky top-8 space-y-2">
                      {[
                        { id: "overview", label: "Getting Started", icon: Zap },
                        {
                          id: "campaigns",
                          label: "Campaign Management",
                          icon: BarChart3,
                        },
                        {
                          id: "assets",
                          label: "Asset Management",
                          icon: Database,
                        },
                        {
                          id: "insights",
                          label: "Analytics & Insights",
                          icon: Globe,
                        },
                      ].map((tab) => (
                        <motion.button
                          key={tab.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setActiveTab(tab.id)}
                          className={`w-full p-4 rounded-xl text-left transition-all duration-300 flex items-center ${
                            activeTab === tab.id
                              ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg"
                              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                          }`}
                        >
                          <tab.icon className="w-5 h-5 mr-3" />
                          {tab.label}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>

                  {/* Code Examples */}
                  <motion.div variants={itemVariants} className="lg:col-span-2">
                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                      <div className="flex items-center justify-between p-4 bg-gray-800">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() =>
                            copyToClipboard(codeExamples[activeTab], activeTab)
                          }
                          className="flex items-center px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg text-sm transition-colors"
                        >
                          {copiedCode === activeTab ? (
                            <>
                              <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 mr-2" />
                              Copy
                            </>
                          )}
                        </motion.button>
                      </div>
                      <motion.pre
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 text-sm text-gray-300 overflow-x-auto"
                      >
                        <code>{codeExamples[activeTab]}</code>
                      </motion.pre>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* API Endpoints Section */}
            <motion.section
              variants={itemVariants}
              className="py-20 px-4 sm:px-6 lg:px-8"
            >
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                  >
                    Available API Endpoints
                  </motion.h2>
                  <motion.p
                    variants={itemVariants}
                    className="text-xl text-gray-600 dark:text-gray-300"
                  >
                    Comprehensive endpoints for complete Facebook Ads management
                  </motion.p>
                </div>

                <div className="space-y-6">
                  {apiEndpoints.map((endpoint: any, index: any) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-3">
                            <span
                              className={`px-3 py-1 rounded-lg text-sm font-semibold mr-4 ${
                                endpoint.method === "GET"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                  : endpoint.method === "POST"
                                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                  : "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                              }`}
                            >
                              {endpoint.method}
                            </span>
                            <code className="text-lg font-mono text-gray-900 dark:text-white">
                              {endpoint.endpoint}
                            </code>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {endpoint.description}
                          </p>
                        </div>
                        <div className="lg:ml-8 lg:w-1/3">
                          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                              Response:
                            </div>
                            <code className="text-sm text-gray-800 dark:text-gray-200">
                              {endpoint.response}
                            </code>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
              variants={itemVariants}
              className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600"
            >
              <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                  variants={itemVariants}
                  className="text-3xl md:text-4xl font-bold text-white mb-6"
                >
                  Ready to Scale Your Facebook Advertising?
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-xl text-white/90 mb-8"
                >
                  Get started with our Meta Marketing API and transform your ad
                  management workflow
                </motion.p>
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start Free Trial
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300"
                  >
                    Contact Sales
                  </motion.button>
                </motion.div>
              </div>
            </motion.section>
          </motion.div>
        </div>
      
      </Layout>
    </>
  );
}
