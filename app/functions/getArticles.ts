import data from '../../json/articles.json'


export type ArticleType = {
  id: number;
  author: string;
  job: string;
  city: string;
  avatar: string;
  imgAlt: string;
  slug: string;
  articles: Array<{
    title: string;
    popular: boolean;
    popularity: number;
    description: string;
    date: string;
    read: string;
    label: string;
    img: string;
    imgAlt: string;
    slug: string;
    content: Array<{
      img: string;
      summary: string;
      section1: string;
      quote: Array<string>;
      summary2: string;
      section2: string;
    }>;
  }>;
};

export async function getArticles() : Promise<any[]> {
  // const res = await fetch(
  //   "https://raw.githubusercontent.com/asbhogal/audiologue/main/json/articles.json"
  // );

  const res = data;
  // if (!res.ok) {
  //   throw new Error("Failed to fetch article data");
  // }

  // return res.json();

  return res;
}
