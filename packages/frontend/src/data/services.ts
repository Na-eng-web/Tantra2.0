import { Code2, TestTube2, Smartphone, Palette, Cloud, Brain } from "lucide-react";
import {
  customSoftwareDevelopment,
  qaSoftwareTesting,
  aiDataScience,
  uiUxDesign,
  mobileAppDevelopment,
  platformAndInfrastructure,
} from "@/assets";

export type ServicePoint = {
  title: string;
  description: string;
};

export type ServiceData = {
  title: string;
  description: string;
  details: string;
  icon: any;
  gradient: string;
  image: string;
  points: ServicePoint[];
};

export const servicesMap: Record<string, ServiceData> = {
  "custom-software-development": {
    title: "Custom Software Development",
    description:
      "Tailored software solutions aligned to your specific business needs, goals, and workflows.",
    details:
      "We analyze your requirements, design scalable architectures, and deliver robust applications with quality, security, and performance at the core.",
    icon: Code2,
    gradient: "from-green-400/20 to-green-500/20",
    image: customSoftwareDevelopment,
    points: [
      { title: "Discovery & Analysis", description: "Collaborative workshops to clarify goals, users, constraints, and ROI." },
      { title: "Architecture", description: "Modular, scalable designs that evolve with product and team growth." },
      { title: "Implementation", description: "Robust delivery with reviews, automation, and clean, maintainable code." },
      { title: "Quality Assurance", description: "TDD, integration, and E2E suites for reliable deployments." },
      { title: "Security", description: "Secure-by-default coding, threat modeling, and dependency hygiene." },
      { title: "Delivery & Support", description: "CI/CD pipelines, documentation, and proactive maintenance." },
      { title: "Change Management", description: "Versioning, release notes, and stakeholder communication." },
      { title: "Training & Handover", description: "Knowledge transfer, playbooks, and team enablement." },
    ],
  },
  "qa-and-testing": {
    title: "QA and Testing",
    description:
      "Quality assurance with TDD, automation, and continuous testing.",
    details:
      "End-to-end quality: unit, integration, performance, release.",
    icon: TestTube2,
    gradient: "from-blue-400/20 to-blue-500/20",
    image: qaSoftwareTesting,
    points: [
      { title: "Test Strategy", description: "Risk-based coverage aligned to business impact and timelines." },
      { title: "Automation", description: "CI-integrated suites for rapid feedback and stability." },
      { title: "Performance", description: "Load, stress, and scalability baselines with tuning guidance." },
      { title: "Security Testing", description: "Static/dynamic analysis and secure configuration checks." },
      { title: "Accessibility", description: "WCAG-focused audits for inclusive, compliant experiences." },
      { title: "Release Readiness", description: "Defect triage, sign-off gates, and rollback plans." },
      { title: "Test Data & Environments", description: "Reliable fixtures, seeded data, and parity test envs." },
      { title: "Observability", description: "Tracing and error reporting wired into test feedback loops." },
    ],
  },
  "ai-and-data-science": {
    title: "AI and Data Science",
    description:
      "Leverage AI, machine learning, and data science to drive innovation and insights.",
    details:
      "We build predictive models, automate processes, and uncover insights that improve decisions and outcomes.",
    icon: Brain,
    gradient: "from-yellow-400/20 to-yellow-500/20",
    image: aiDataScience,
    points: [
      { title: "Data Engineering", description: "Reliable pipelines, data quality checks, and feature stores." },
      { title: "Modeling", description: "Classical ML and deep learning tailored to your use case." },
      { title: "Evaluation", description: "Robust metrics, A/B tests, and drift monitoring." },
      { title: "MLOps", description: "Deployment, versioning, reproducibility, and monitoring at scale." },
      { title: "Responsible AI", description: "Fairness, privacy, transparency, and governance controls." },
      { title: "Visualization", description: "Decision-ready dashboards and narratives for stakeholders." },
      { title: "Data Governance", description: "Lineage, catalogs, and access policies for trust." },
      { title: "Cost & Performance", description: "Efficient training/inference with smart resource usage." },
    ],
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    description:
      "Beautiful, user-friendly, and intuitive interfaces that enhance user experience.",
    details:
      "We craft accessible, responsive designs and iterate quickly with user feedback and modern design systems.",
    icon: Palette,
    gradient: "from-orange-400/20 to-orange-500/20",
    image: uiUxDesign,
    points: [
      { title: "User Research", description: "Interviews, journeys, and personas to anchor decisions." },
      { title: "Wireframes", description: "Rapid flows validated with real user feedback." },
      { title: "Design System", description: "Reusable components, tokens, and guidelines for consistency." },
      { title: "Accessibility", description: "Contrast, keyboard nav, ARIA roles, and audits." },
      { title: "Prototyping", description: "Interactive demos to align stakeholders early." },
      { title: "Handoff", description: "Specs, redlines, and assets for smooth dev delivery." },
      { title: "Usability Testing", description: "Tasks and metrics to validate ease of use." },
      { title: "Localization", description: "Layouts and content ready for multiple locales." },
    ],
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    description:
      "Native and cross-platform apps for iOS and Android.",
    details:
      "We deliver performant mobile experiences with secure APIs, offline support, and polished UI.",
    icon: Smartphone,
    gradient: "from-blue-400/20 to-blue-500/20",
    image: mobileAppDevelopment,
    points: [
      { title: "Native & Cross-Platform", description: "Right-fit tech (native/Flutter/React Native) for goals." },
      { title: "Offline-first", description: "Reliable UX with caching, sync queues, and conflict handling." },
      { title: "Secure Auth", description: "OAuth, biometrics, token management, and secure storage." },
      { title: "Push & Notifications", description: "Timely messaging with segmentation and deep links." },
      { title: "Store Readiness", description: "Guidelines, builds, QA, and analytics instrumentation." },
      { title: "Monitoring", description: "Crash reporting, performance traces, and release health." },
      { title: "Device Integration", description: "Camera, sensors, and native capabilities with permissions." },
      { title: "UX Polish", description: "Smooth animations, gestures, and platform-specific patterns." },
    ],
  },
  "platform-and-infrastructure": {
    title: "Platform and Infrastructure",
    description:
      "Cloud and on-prem solutions to power your business.",
    details:
      "We architect resilient platforms, automate CI/CD, and optimize cost, scalability, and observability.",
    icon: Cloud,
    gradient: "from-red-400/20 to-red-500/20",
    image: platformAndInfrastructure,
    points: [
      { title: "IaC", description: "Terraform blueprints and modules for repeatable setups." },
      { title: "Containers", description: "Docker images, registries, and Kubernetes orchestration." },
      { title: "CI/CD", description: "Automated pipelines for build, test, and deploy with gates." },
      { title: "Security & Compliance", description: "Policies, encryption, audits, and zero-trust patterns." },
      { title: "Cost Optimization", description: "Rightsizing, autoscaling, and reserved capacity planning." },
      { title: "Observability", description: "Tracing, metrics, logs, and actionable alerts." },
      { title: "Resilience", description: "HA, backups, DR drills, and chaos testing." },
      { title: "Networking", description: "VPCs, ingress/egress, service meshes, and peering." },
    ],
  },
};
