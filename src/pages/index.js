import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import TabItem from "@theme/TabItem";

import styles from "./index.module.css";
import "./index.module.css";
import "@code-hike/mdx/dist/index.css";

// import images
import CodeHubImg from "@site/static/img/home/code-hub.jpg";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return <header className="flex justify-evenly py-5 align-middle"></header>;
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <header className="flex justify-evenly py-10 align-middle">
          <div className="container text-center flex align-middle flex-col">
            <div>
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
            <div>
              <div className={`${styles.buttons} my-10`}>
                <TabItem>
                  <Link
                    className="button button--secondary button--lg"
                    to="/docs/intro"
                  >
                    Get Started
                  </Link>
                </TabItem>
              </div>
            </div>
          </div>
          <div className="container">
            <img
              src={CodeHubImg}
              className="card h-[60vh] w-[60vh] rounded-xl shadow-lb"
            />
          </div>
        </header>
      </main>
    </Layout>
  );
}
