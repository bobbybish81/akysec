import IHome from "./IHome";
import IServices from "./IServices";

interface IContent {
  loading: boolean,
  home: IHome,
  services: IServices,
  errorMessage: string,
}

export default IContent;