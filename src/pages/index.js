import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
// import HomepageFeatures from '../components/HomepageFeatures';
import DisclaimerContent from '../components/DisclaimerContent';

/*
<Head>
	<link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#25c2a0" />
	<meta name="msapplication-TileColor" content="#25c2a0" />
	<meta name="theme-color" content="#25c2a0" />
</Head>
*/

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/reglas-basicas">
            Reglas básicas
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // title={`Inicio de ${siteConfig.title}`}
      description="Traducción de código abierto de las reglas de Warmachine & Hordes">
			<HomepageHeader />
      <main>
				<DisclaimerContent />
      </main>
    </Layout>
  );
}
