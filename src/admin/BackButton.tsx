import { Button } from "react-admin";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router";
import { useCallback } from "react";

const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return <Button children={<ArrowBack />} onClick={handleClick} />;
};

export default BackButton;
