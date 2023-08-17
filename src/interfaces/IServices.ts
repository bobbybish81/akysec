interface ISlug {
  current: string,
  _type: string,
}

interface IAsset {
  _ref: string,
  _type: string,
}

interface IImage {
  _type: string,
  asset: IAsset,
}

interface IServiceDetail {
  _type: string,
  marks: string[],
  text: string,
  _key: string,
}

interface IService {
  children: IServiceDetail[]
  marksDef: string[],
  style: string,
  _key: string,
  _type: string,
}

interface IServices {
  Risk_management: IService[],
  Security_audits: IService[],
  CISO_as_a_Service: IService[],
  Governance: IService[],
  Security_awareness_and_training: IService[],
  Information_security_management_system: IService[],
  Compliance_and_regulatory_requirements: IService[],
  Third_party_risk_management: IService[],
  DevSecOps: IService[],
  Cloud_security: IService[],
  Identity_and_access_management: IService[],
  zServices: IService[],
  slug: ISlug,
  image: IImage,
  _type: string,
  _createdAt: string,
  _updatedAt: string,
  _rev: string,
  _id: string,
}

export default IServices