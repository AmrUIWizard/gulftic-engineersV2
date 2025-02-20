import React, { type FC } from "react";
import { useNavigate, useLocation } from "react-router";
import { ArrowLeft } from "lucide-react";

const BackBtn: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const canGoBack = pathSegments.length > 0;

  const handleBack = () => {
    if (!canGoBack) return;

    if (pathSegments.length === 1) {
      navigate("/");
    } else {
      const newPath = `/${pathSegments.slice(0, -1).join("/")}` || "/";
      navigate(newPath);
    }
  };

  return (
    <button
      className={`bg-primary rounded-primary text-white flex items-center justify-center w-8 h-8 cursor-pointer hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed`}
      onClick={handleBack}
      disabled={!canGoBack}
    >
      <ArrowLeft />
    </button>
  );
};

export default BackBtn;
