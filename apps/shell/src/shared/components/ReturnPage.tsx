import { useNavigate } from "react-router-dom";
import { Button } from "./ui/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ReturnPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <Button
        onClick={() => navigate(-1)}
        className=" cursor-pointer text-xl py-2 px-4 h-10"
        variant={"ghost"}
      >
        <ArrowLeft/>
        Regresar
      </Button>
    </div>
  );
};

export default ReturnPage;
