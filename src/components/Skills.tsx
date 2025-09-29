const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: ["AWS", "Azure", "GCP", "OCI", "Cloudflare"]
    },
    {
      title: "DevOps & Infrastructure", 
      skills: ["Kubernetes", "Docker", "Terraform", "Terragrunt", "Crossplane", "Pulumi", "Packer", "ArgoCD", "FluxCD", "Jenkins", "Ansible", "Chef", "Helm", "Istio", "Flagger", "Argo Rollouts", "Argo Workflows", "GitHub Actions", "Kafka", "RabbitMQ", "KServe", "Knative", "KEDA", "Airflow", "Argo Events", "Opencost", "Tekton", "Velero"]
    },
    {
      title: "Security & Compliance",
      skills: ["Hashicorp Vault", "Trivy", "Snyk", "Kyverno", "SonarQube", "Checkov", "Wiz", "OWASP ZAP", "OPA Gatekeeper", "SOPS"]
    },
    {
      title: "Observability",
      skills: ["Prometheus", "Grafana", "Elasticsearch", "Loki", "Alloy", "Mimir", "Tempo", "Logstash", "Kibana", "Fluent Bit", "Fluentd", "OpenTelemetry", "Jaeger", "Kiali", "Datadog"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "Redis", "Memcached", "BigQuery", "DynamoDB", "MongoDB"]
    },
    {
      title: "Languages",
      skills: ["Go", "Python", "Node.js", "Groovy", "Boto3", "shell scripting"]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={category.title} className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;