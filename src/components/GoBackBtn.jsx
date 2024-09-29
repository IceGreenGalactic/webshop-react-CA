import { useNavigate } from "react-router-dom";
import { GoBack } from "../App.styles";

const GoBackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return <GoBack onClick={handleGoBack}><i className="fa-solid fa-arrow-left-long"></i></GoBack>;
};

export default GoBackButton;
