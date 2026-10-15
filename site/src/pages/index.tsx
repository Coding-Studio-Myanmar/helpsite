import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type CardItem = {title: string; description: string; to: string};

const categories: CardItem[] = [
  {
    title: 'Getting Started',
    description: 'New here? Start with an overview of our products and how to get help.',
    to: '/docs/getting-started',
  },
  {
    title: 'How-To Guides',
    description: 'Step-by-step instructions for common tasks.',
    to: '/docs/product-a/how-to',
  },
  {
    title: 'Technical Documentation',
    description: 'Architecture, configuration, APIs and integration references.',
    to: '/docs/product-a/technical',
  },
  {
    title: 'Training Guides',
    description: 'Learn at your own pace with guided training material.',
    to: '/docs/training',
  },
];

const products: CardItem[] = [
  {
    title: 'Product A',
    description: 'Sample product section. Duplicate it for each product or application.',
    to: '/docs/product-a',
  },
];

function Cards({items}: {items: CardItem[]}): ReactNode {
  return (
    <div className={styles.cards}>
      {items.map((item) => (
        <Link key={item.title} className={styles.card} to={item.to}>
          <Heading as="h3">{item.title}</Heading>
          <p>{item.description}</p>
        </Link>
      ))}
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const logo = useBaseUrl('/img/logo.png');
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <header className={styles.hero}>
        <div className="container">
          <img className={styles.heroLogo} src={logo} alt="Coding Studio" />
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroTagline}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs/getting-started">
              Get started
            </Link>
            <Link className="button button--outline button--secondary button--lg" to="/docs/training">
              Browse training
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <div className="container">
            <Heading as="h2">Browse by topic</Heading>
            <Cards items={categories} />
          </div>
        </section>
        <section className={styles.section}>
          <div className="container">
            <Heading as="h2">Products</Heading>
            <Cards items={products} />
          </div>
        </section>
      </main>
    </Layout>
  );
}
