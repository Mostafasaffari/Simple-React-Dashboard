import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

interface IProps extends RouteComponentProps {}

const App: React.FC<IProps> = ({ match }) => {
  const { url } = match;

  return (
    <h1>
      This is dashboard index <Link to={`${url}/setting`}>Go to Setting</Link>
    </h1>
  );
};
export default App;
