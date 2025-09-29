
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Finure - MLOps-Driven Cloud-Native Credit Risk Detection AI Platform",
      description: "Finure is a cloud-native application designed to streamline the credit card application process using AI and real-time risk detection. Built on Kubernetes and GCP, the application leverages a custom logistic regression model to evaluate the risk associated with each application, ensuring that only low-risk applications are approved. The platform leverages GitOps, modular & reusable CI/CD & MLOps pipelines, serverless AI inference along with robust machine based IaC practices to deliver scalable, secure and observable microservices.",
      technologies: ["GKE", "Airflow", "Argo Events", "Argo Workflows", "Kafka", "Knative", "KServe", "Python", "React", "Flux", "Istio", "Kiali", "KMS", "Cloudflare", "Loki", "Fluent Bit", "Grafana", "Prometheus", "Hashicorp Vault", "Trivy", "ExternalDNS", "cert-manager", "Terraform", "External Secrets Operator", "Atlantis", "Jaeger", "Kyverno", "Opencost", "Tekton", "PostgreSQL", "Reflector", "SonarQube", "Velero", "Snyk", "SOPS", "GitOps", "GCS", "GitHub Actions", "Cloud NAT", "Checkov", "Helm"],
      github: "https://github.com/finure",
      projectUrl: "https://github.com/finure",
      featured: true,
      fullWidth: true
    },
    {
      title: "FileFlux - Secure & Scalable File Storage & Management",
      description: "FileFlux is a highly scalable and secure file storage and management platform that uses AWS and orchestrated via Kubernetes (EKS). It allows users to register, create/delete buckets, and upload/download/manage files with high availability and efficient storage mechanisms like ZFS pools. The application is built to handle large-scale file operations and is optimized for performance, security, and fault tolerance.",
      technologies: ["EKS", "Karpenter", "Fargate", "ZFS", "Helm", "Terraform", "Python", "Packer", "ArgoCD", "GitHub Actions", "Istio", "KMS", "Cloudflare", "Elasticsearch", "Fluent Bit", "Kibana", "CockroachDB", "AWS Secrets Manager", "Trivy", "ExternalDNS", "cert-manager", "Ansible"],
      github: "https://github.com/fileflux",
      projectUrl: "https://github.com/fileflux",
      featured: false,
      fullWidth: true
    },
    {
      title: "CVELens - AI-Powered CVE Pipeline for Real-Time Vulnerability Intelligence",
      description: "CVELens is an AI-driven web application designed to provide real-time, actionable intelligence on Common Vulnerabilities and Exposures (CVE). With a fully automated pipeline, a custom Kubernetes operator to ingest and process new CVE's regularly and a powerful query interface backed by state-of-the-art machine learning models, CVELens empowers security teams and developers to stay ahead of emerging vulnerabilities. Whether you're a DevOps engineer, security analyst, or software developer, CVELens offers a seamless experience to query the latest vulnerability data and make informed security decisions.",
      technologies: ["Go", "EKS", "Helm", "Docker", "Custom Kubernetes Operator", "Istio", "Jenkins", "Groovy", "Packer", "Terraform", "GitHub Actions", "SentenceTransformer", "CloudNativePG", "PostgreSQL", "Kafka", "Python Flask", "KMS", "Velero", "Flyway", "Cluster Autoscaler", "Prometheus", "Grafana", "Fluent Bit", "Cloudwatch", "ACM", "ExternalDNS", "Shell" ],
      github: "https://github.com/cvelens",
      projectUrl: "https://github.com/cvelens",
      featured: false,
      fullWidth: true
    },
    {
      title: "ProductSphere - Highly Scalable & Simple Product Management System",
      description: "ProductSphere is a Node.js-based web application designed to simplify product management and user authentication. Built with Express.js and powered by a MySQL database, ProductSphere allows users to create, manage, and update product information with ease. It also enables users to securely upload product images, associate them with products, and manage user information.",
      technologies: ["Node.js", "EC2", "RDS Multi-AZ", "MySQL", "Cloudwatch", "DynamoDB", "GCS", "Lambda", "Terraform", "Packer", "NAT Gateway", "Bastion Host", "AWS Secrets Manager", "S3", "AWS KMS", "VPC Flow Logs", "Route53", "ALB", "AWS ACM"],
      github: "https://github.com/productsphere",
      projectUrl: "https://github.com/productsphere",
      featured: false,
      fullWidth: false
    },
    {
      title: "CloudConvert: Serverless Multi-Cloud Image Conversion Pipeline",
      description: "Spins up serverless cloud infrastructure designed to convert user uploaded images into various different formats such as PNG, JPG, and WEBP using Terraform and leveraging various AWS and Azure services such as API Gateway, Cognito User Pools, Lambda, S3, DynamoDB, SNS, SQS, and Azure Blob storage to achieve this. The IaC code uses fanout design for parallel processing and is designed in modular format encapsulating identical groups of resources with reusable code for future projects.",
      technologies: ["Lambda", "DynamoDB", "SNS", "SQS", "S3", "Azure Blob Storage", "Cognito User Pools", "API Gateway", "Cloudwatch"],
      github: "https://github.com/lokesh1306/cloudconvert",
      projectUrl: "https://github.com/lokesh1306/cloudconvert",
      featured: false,
      fullWidth: false
    },
    {
      title: "ImagifyAI - Serverless AI-Powered Image Upload, Tagging, Search and Management",
      description: "ImagifyAI is a highly scalable serverless web application primarily designed to work with Cloudflare services with the objective to allow users to upload, store images, which are automatically tagged by Resnet50 AI model. These images can then be searched, viewed and downloaded by the authenticated end-users",
      technologies: ["React", "Node.js", "Cloudflare Pages", "Cloudflare D1", "Cloudflare R2", "Cloudflare Workers", "Cloudflare Workers AI"],
      github: "https://github.com/imagifyai",
      projectUrl: "https://github.com/imagifyai",
      featured: false,
      fullWidth: false
    },
    {
      title: "Kubernetes Kubeadm Deployment",
      description: "A script designed to automate the process of setting up a Kubernetes cluster on Ubuntu 24.04. The script handles everything from system preparation, package installations, kernel module configuration, and setting up container runtime (Containerd), all the way through to initializing Kubernetes with kubeadm, installing Cilium as the CNI (Container Networking Interface), and setting up a metrics server for monitoring.",
      technologies: ["Shell scripting", "Cilium", "Kubeadm", "ContainerD", "Kubelet", "Metrics Server"],
      github: "https://github.com/lokesh1306/kubernetes-script-kubeadm",
      projectUrl: "https://github.com/lokesh1306/kubernetes-script-kubeadm",
      featured: false,
      fullWidth: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            Personal Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300 ${
                project.fullWidth ? 'lg:col-span-2' : ''
              }`}
            >              
              <div className="p-6">
                {project.featured && (
                  <div className="mb-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                
                <a 
                  href={project.projectUrl}
                  className="block mb-3 hover:text-primary transition-colors"
                >
                  <h3 className="text-2xl font-bold text-card-foreground">{project.title}</h3>
                </a>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
              <div className="flex gap-4">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="bg-white text-black border hover:shadow-lg ">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </a>
                )}
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
