
import { Award, Calendar, ExternalLink, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CertificateModal from "./CertificateModal";
import { useState } from "react";

const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<{url: string, title: string} | null>(null);
  
  const certifications = [
    {
      title: "CKS: Certified Kubernetes Security Specialist",
      credentialId: "LF-s60sr1x1gi",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/4e2cf698-566e-4567-adf8-ce967f7346f4",
      certificateUrl: "https://docs.clokesh.me/certs/cks.pdf",
      badgeImage: "/assets/cks.png"
    },
    {
      title: "ICA: Istio Certified Associate",
      credentialId: "LF-ftbsmh76sl",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/c5f92175-4aac-43c7-95e2-abc29d2c656e",
      certificateUrl: "https://docs.clokesh.me/certs/ica.pdf",
      badgeImage: "/assets/ica.png"
    },
    {
      title: "CKA: Certified Kubernetes Administrator",
      credentialId: "LF-xgqz2euivj",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/83ddefb0-1f10-4f14-93a4-82866c339e4c",
      certificateUrl: "https://docs.clokesh.me/certs/cka.pdf",
      badgeImage: "/assets/cka.png"
    },
    {
      title: "AWS Certified Solutions Architect – Professional",
      credentialId: "2b346919f720428eb11f1869ffb35d6c",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/29b948f3-ea2d-4fb8-b17b-8541d9096882",
      certificateUrl: "https://docs.clokesh.me/certs/sap.pdf",
      badgeImage: "/assets/sap.png"
    },
    {
      title: "GCP Professional Cloud Architect Certification",
      credentialId: "aadd18d37bce41f980a0a48c21a1fe99",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/5fa6bccd-4920-44e6-bb02-23a7a08dfcf2",
      certificateUrl: "https://docs.clokesh.me/certs/gpca.pdf",
      badgeImage: "/assets/gpca.png"
    },
    {
      title: "HashiCorp Certified: Terraform Authoring and Operations Professional",
      credentialId: "a6a8d6a0-bcfd-48d3-8694-b9b741960512",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/a6a8d6a0-bcfd-48d3-8694-b9b741960512",
      certificateUrl: "https://docs.clokesh.me/certs/tfp.pdf",
      badgeImage:  "/assets/tfp.png"
    },
    {
      title: "HashiCorp Certified: Vault Operations Professional",
      credentialId: "e11026f1-4aba-48fb-acf1-b09d926b6ab4",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/e11026f1-4aba-48fb-acf1-b09d926b6ab4",
      certificateUrl: "https://docs.clokesh.me/certs/vop.pdf",
      badgeImage: "/assets/vop.png"
    },
    {
      title: "AWS Certified Security - Specialty",
      credentialId: "297999b763f9423ab2dec7159ad4a081",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/6553c23e-607f-4838-8d4b-54b20da8e850",
      certificateUrl: "https://docs.clokesh.me/certs/scs.pdf",
      badgeImage:  "/assets/scs.png"
    },
    {
      title: "GCP Professional Cloud Security Engineer Certification",
      credentialId: "bcb85de41a634382965de67df543d61b",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/4c46182d-9d37-43d5-be77-5fd954c71551",
      certificateUrl: "https://docs.clokesh.me/certs/pcse.pdf",
      badgeImage: "/assets/pcse.png"
    },
    {
      title: "FinOps Certified Engineer",
      credentialId: "rhmemgg8wape",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/49ff5104-afe5-45cc-af1d-ea0a03260b99",
      certificateUrl: "https://docs.clokesh.me/certs/fce.pdf",
      badgeImage: "/assets/fce.png"
    },
    {
      title: "AWS Certified Machine Learning – Specialty",
      credentialId: "334aaff6aaa448f8a02d40e143414f9e",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/e61c253e-d2f8-4808-b7de-182d74d73a07",
      certificateUrl: "https://docs.clokesh.me/certs/mls.pdf",
      badgeImage: "/assets/mls.png"
    },
    {
      title: "GCP Professional Machine Learning Engineer Certification",
      credentialId: "fae28bbb28924227b90c53e7ef627742",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/51c32daf-7bcc-4d86-8e4f-15561e4751c2",
      certificateUrl: "https://docs.clokesh.me/certs/pmle.pdf",
      badgeImage: "/assets/pmle.png"
    },
    {
      title: "KCA: Kyverno Certified Associate",
      credentialId: "LF-2ncibw4cce",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/c24c225d-ada0-446e-b7ec-87c559c34a5a",
      certificateUrl: "https://docs.clokesh.me/certs/kca.pdf",
      badgeImage: "/assets/kca.png"
    },
    {
      title: "OTCA: OpenTelemetry Certified Associate",
      credentialId: "LF-r6se7ls7gt",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/679d7b00-38fa-46ab-99fa-5c8a50564121",
      certificateUrl: "https://docs.clokesh.me/certs/otca.pdf",
      badgeImage: "/assets/otca.png"
    },
    {
      title: "CAPA: Certified Argo Project Associate",
      credentialId: "LF-5s8w34wsbg",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/94d85912-49d5-4d2f-8fb9-58df49b14252",
      certificateUrl: "https://docs.clokesh.me/certs/capa.pdf",
      badgeImage: "/assets/capa.png"
    },
    {
      title: "CGOA: Certified GitOps Associate",
      credentialId: "LF-8wvkw0ljf0",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/cd7f80cc-7cbb-46d7-b2a4-745cb4ffb445",
      certificateUrl: "https://docs.clokesh.me/certs/cgoa.pdf",
      badgeImage: "/assets/cgoa.png"
    },
    {
      title: "CCA: Cilium Certified Associate",
      credentialId: "LF-jb8begod6m",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/aaa47bed-ad60-4cde-b60b-e9d381f024b7",
      certificateUrl: "https://docs.clokesh.me/certs/cca.pdf",
      badgeImage: "/assets/cca.png"
    },
    {
      title: "AWS Certified DevOps Engineer – Professional",
      credentialId: "29a4d8a05d894bfca08f9ffc7d9e13be",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/f20516a9-1486-4e45-a211-6d10ad158229",
      certificateUrl: "https://docs.clokesh.me/certs/dop.pdf",
      badgeImage: "/assets/dop.png"
    },
    {
      title: "AWS Certified Advanced Networking – Specialty",
      credentialId: "bf2b0e5b22514a3d92655f9b2788e3b0",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/9ea095bf-9784-4ba7-a1cd-ffd6f73cc36d",
      certificateUrl: "https://docs.clokesh.me/certs/ans.pdf",
      badgeImage: "/assets/ans.png"
    },
    {
      title: "Red Hat Certified Engineer",
      credentialId: "160-158-473",
      status: "Active",
      verifyUrl: "https://s3.us-east-1.amazonaws.com/docs.clokesh.me/certs/RHCE.pdf",
      certificateUrl: "https://docs.clokesh.me/certs/RHCE.pdf",
      badgeImage: "/assets/rhce.png"
    },
    {
      title: "PCA: Prometheus Certified Associate",
      credentialId: "LF-3w5gzfn0a6",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/62cddc55-a7a8-4f31-8638-ebe2ffb8a466",
      certificateUrl: "https://docs.clokesh.me/certs/pca.pdf",
      badgeImage: "/assets/pca.png"
    },
    {
      title: "GCP Associate Cloud Engineer Certification",
      credentialId: "1bcf57f8a4a64cf9a6acafbd5544b5db",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/8e30ccf5-7561-4484-bbfb-2ba07ce8cf15",
      certificateUrl: "https://docs.clokesh.me/certs/ace.pdf",
      badgeImage: "/assets/ace.png"
    },
    {
      title: "AWS Certified SysOps Administrator – Associate",
      credentialId: "YKF1TTGDY1R4QV52",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/3cc40f30-c033-430d-89aa-14860758ff8b",
      certificateUrl: "https://docs.clokesh.me/certs/soa.pdf",
      badgeImage: "/assets/soa.png"
    },
    {
      title: "AWS Certified Developer – Associate",
      credentialId: "NGN9PG31XJE11G55",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/c86b3979-d6d8-42b2-a49f-333ffcae5696",
      certificateUrl: "https://docs.clokesh.me/certs/dva.pdf",
      badgeImage: "/assets/dva.png"
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      credentialId: "VH51KFC15FE114G4",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/06f39a03-3ab5-4a73-bc6d-917ddf53645c",
      certificateUrl: "https://docs.clokesh.me/certs/saa.pdf",
      badgeImage: "/assets/saa.png"
    },
    {
      title: "Red Hat Certified System Administrator",
      credentialId: "160-158-473",
      status: "Active",
      verifyUrl: "https://s3.us-east-1.amazonaws.com/docs.clokesh.me/certs/RHCSA.pdf",
      certificateUrl: "https://docs.clokesh.me/certs/RHCSA.pdf",
      badgeImage: "/assets/rhcsa.png"
    },
    {
      title: "HashiCorp Certified: Terraform Associate (003)",
      credentialId: "738c6d16-820c-4070-a391-085e35fdadb",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/fb7b01b9-d8c1-47bf-8dac-f195e6ad2a8f",
      certificateUrl: "https://docs.clokesh.me/certs/tf.pdf",
      badgeImage: "/assets/tf.png"
    },
    {
      title: "HashiCorp Certified: Vault Associate (002)",
      credentialId: "198ebad3-e927-4f02-9936-45bcb6c412b5",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/1492c296-1e0f-405b-a3c4-667f4d7863d6",
      certificateUrl: "https://docs.clokesh.me/certs/vault.pdf",
      badgeImage: "/assets/vault.png"
    },
    {
      title: "CompTIA Network+ ce Certification",
      credentialId: "N9J30BBSNMF1QNSS",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/f7e53631-8396-4d5b-b2f7-03e10b19101f",
      certificateUrl: "https://docs.clokesh.me/certs/comptia.pdf",
      badgeImage: "/assets/comptia.png"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      credentialId: "05FGLEPDP2B4QQSE",
      status: "Active",
      verifyUrl: "https://www.credly.com/badges/d3be9dcc-c59a-49d1-8fee-51de44606f5c",
      certificateUrl: "https://docs.clokesh.me/certs/clf.pdf",
      badgeImage: "/assets/clf.png"
    }
  ];

  return (
    <>
      <section id="certifications" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
              Professional Certifications
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert.title}
                className="bg-card rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-border"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                    {cert.status}
                  </Badge>
                  {cert.badgeImage ? (
                    <img 
                      src={cert.badgeImage} 
                      alt={`${cert.title} badge`}
                      className="w-8 h-8 object-contain opacity-80"
                    />
                  ) : (
                    <div className="flex items-center text-primary">
                      <Award className="h-4 w-4" />
                    </div>
                  )}
                </div>
                
                <h3 className="text-sm font-semibold mb-4 text-card-foreground leading-tight">
                  {cert.title}
                </h3>
                
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground mb-1">Credential ID</p>
                  <p className="text-xs font-mono text-card-foreground bg-muted px-2 py-1 rounded truncate">
                    {cert.credentialId}
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs"
                    onClick={() => setSelectedCertificate({url: cert.certificateUrl, title: cert.title})}
                  >
                    <Eye className="h-3 w-3 mr-1" />
                    View
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs"
                    asChild
                  >
                    <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                      Verify
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CertificateModal
        isOpen={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        certificateUrl={selectedCertificate?.url || ""}
        title={selectedCertificate?.title || ""}
      />
    </>
  );
};

export default Certifications;
