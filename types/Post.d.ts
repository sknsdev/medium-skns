export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  slug: {
    _type: string;
    current: string;
  };
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  body: [object];
  author: {
    name: string;
    image: string;
  };
}
