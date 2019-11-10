import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";

interface IProps extends RouteComponentProps {}

const App: React.FC<IProps> = ({ match }) => {
  const { url } = match;
  const token: string = useSelector((state: AppState) => state.user.token);
  console.log(token);
  return (
    <h1>
      This is dashboard index <Link to={`${url}/setting`}>Go to Setting</Link>
    </h1>
  );
};
export default App;
