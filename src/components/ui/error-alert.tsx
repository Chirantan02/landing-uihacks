import {
  Alert,
  AlertDescription,
} from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface ErrorAlertProps {
  message: string;
  details?: string;
}

export const ErrorAlert = ({ message, details }: ErrorAlertProps) => {
  return (
    <Alert variant="destructive">
      <div className="flex gap-2">
        <AlertCircle className="h-4 w-4" />
        <div>
          <div className="font-medium">{message}</div>
          {details && <AlertDescription>{details}</AlertDescription>}
        </div>
      </div>
    </Alert>
  );
}; 