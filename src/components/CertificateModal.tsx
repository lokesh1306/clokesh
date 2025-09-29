import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificateUrl: string;
  title: string;
}

const CertificateModal = ({ isOpen, onClose, certificateUrl, title }: CertificateModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card rounded-lg shadow-2xl max-w-4xl max-h-[90vh] w-full mx-4 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="hover:bg-muted"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="p-4">
          <iframe
            src={`${certificateUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
            className="w-full h-[70vh] border border-border rounded"
            title={`Certificate: ${title}`}
          />
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;