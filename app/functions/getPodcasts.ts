import data from '../../json/podcasts.json'

export type PodcastType = {
  id: number;
  title: string;
  img: string;
  imgAlt: string;
  date: string;
  duration: string;
  episode: string;
  slug: string;
  content: {
    summary: string;
    section1: string;
    quote: [string, string];
    section2: string;
  }[];
};

export async function getPodcasts(): Promise<any[]> {
  // const res = await fetch(
  //   "https://raw.githubusercontent.com/asbhogal/audiologue/main/json/podcasts.json"
  // );

  // if (!res.ok) {
  //   throw new Error("Failed to fetch podcast data");
  // }

  const res = data;

  // return res.json();

  return res;
}
