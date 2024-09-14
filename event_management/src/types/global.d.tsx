type ButtonStyle = {
  backgroundColor: string;
  color: string;
  borderColor?: string;
};

// navbar
type NavDataType = {
  logo: string;
  links: NavLinksType[];
  button: string[];
};

type NavLinksType = {
  name: string;
  navigate: string;
};

// carousel
type CarouselType = {
  img: string;
  bigText: string;
  smallText?: string;
  smallTextButton?: string;
  smallTextIcon?: string;
  buttonText: string;
  buttonIcon: string;
};

// Our Services card
type OurServicesType = {
  img: string;
  name: string;
  paragraph: string;
  CategoriesPages?: CategoryPageType[];
};

// Our Services Explore Button Page Redirect
interface CategoryPageType {
  bigImg: string;
  text: string;
  images: string[];
}

//  About us
interface HomeAboutUsType {
  paragraph: string;
  fillButtonText: string;
  fillButtonIcon: string;
  unfillButtonText: string;
  unfillButtonIcon: string;
  image: string;
  leftText: LeftTextType[];
  aboutCardData: AboutCardDataType[];
  flexData: FlexDataType[];
}

interface LeftTextType {
  first: string;
  second: string;
  last: string;
}

interface AboutCardDataType {
  img: string;
  title: string;
  text: string;
}

interface FlexDataType {
  greenTitle: string;
  icon: string;
  text: string;
}

// footer
interface FooterType {
  Footerlogo: string;
  NimaText: string;
  EventText: string;
  Footerparagraphtext: string;
  Copyright: string;
  socialIcon: NavLinksType[];
  Quick_Links: NavLinksType[];
  Other_Links: NavLinksType[];
  Contact_Now: string;
  Contact_NowIcon: string;
}

// Testimonial
type TestimonialType = {
  image?: string;
  name: string;
  paragraph: string;
};

//FAQ's
type FAQType = {
  ques: string;
  ans: string;
};
export type {
  HomeAboutUsType,
  OurServicesType,
  CarouselType,
  ButtonStyle,
  NavDataType,
  NavLinksType,
  FooterType,
  TestimonialType,
  FAQType,
  CategoryPageType,
  LeftTextType,
  AboutCardDataType,
  FlexDataType,
};
