"use client";

import NewsletterTicker from "./NewsletterTicker";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import FooterSocialLinks from "./FooterSocialsLinks";
import NewsletterSignUp from "./NewsletterSignUp";

export default function Footer() {
  return (
    <footer className="bg-black overflow-hidden">
      {/* <NewsletterTicker /> */}
      <div className="max-w-[95rem] mx-auto px-6">
        <div className="row py-8 xl:py-[128px] items-center">
          <h2 className="uppercase text-footer-title col-6">
            Design news to <br/>your inbox
          </h2>
          <div className="flex flex-wrap lg:justify-end gap-3 col-6">
            <NewsletterSignUp
              formClassName="flex flex-col gap-4 max-w-[28rem] w-full"
              formFieldsClassName="flex flex-wrap gap-3"
              inputClassName="max-w-[20rem]"
              buttonClassName="bg-white text-black hover:text-white"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap lg:justify-between gap-6 max-w-[95rem] w-full">
          <h3 className="heading3-title mb-3 text-white">AUDIOLOGUE</h3>
          <div className="flex lg:flex-row max-w-[63.125rem] w-full">
            <nav className="flex flex-1" aria-label="left-footer-links">
              <ul className="text-white space-y-3">
                <li>
                  <Link href="#">Art</Link>
                </li>
                <li>
                  <Link href="#">Design</Link>
                </li>
                <li>
                  <Link href="#">Architecture</Link>
                </li>
              </ul>
            </nav>
            <nav className="flex flex-1" aria-label="middle-footer-links">
              <ul className="text-white space-y-3">
                <li>
                  <Link href="/magazine">Magazine</Link>
                </li>
                <li>
                  <Link href="/podcasts">Podcast</Link>
                </li>
                <li>
                  <Link href="/authors">Authors</Link>
                </li>
              </ul>
            </nav>
            <nav className="flex flex-1" aria-label="right-footer-links">
              <ul className="text-white space-y-3">
                <li>
                  <a href="#">Styleguide</a>
                </li>
                <li>
                  <a href="#">Licensing</a>
                </li>
                <li>
                  <a href="#">Changelog</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row justify-between gap-6 py-3 lg:pt-[6rem] lg:pb-[4.0625rem] w-full">
          <p className="font-regular text-white">
            Designed by{" "}
            <Link href="https://princejodhani.vercel.app" target="_blank">Prince Jodhani</Link>.
          </p>
          {/* <FooterSocialLinks /> */}
        </div>
      </div>
    </footer>
  );
}
