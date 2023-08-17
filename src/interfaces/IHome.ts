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

interface IHome {
  intro_1: string,
  intro_2: string,
  Why_choose_Akysec: string,
  What_can_Akysec_do_for_me: string[],
  About_Akysec: string[],
  founder: string[],
  Pricing: string[],
  _type: string,
  _createdAt: string,
  _updatedAt: string,
  _rev: string,
  _id: string,
  slug: ISlug,
  image: IImage,
}

export default IHome