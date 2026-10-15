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
    description: 'Step-by-step instructions for common tasks. Choose a product below.',
    to: '/#products',
  },
  {
    title: 'Technical Documentation',
    description: 'Configuration and reference material. Choose a product below.',
    to: '/#products',
  },
  {
    title: 'Training Guides',
    description: 'Learn at your own pace with guided training material.',
    to: '/docs/training',
  },
];

const products: CardItem[] = [
  {
    title: 'Event Studio',
    description: 'Guides, technical documentation and training for Event Studio.',
    to: '/docs/event-studio',
  },
  {
    title: 'DocGen Studio',
    description: 'Guides, technical documentation and training for DocGen Studio.',
    to: '/docs/docgen-studio',
  },
  {
    title: 'Vote Studio',
    description: 'Guides, technical documentation and training for Vote Studio.',
    to: '/docs/vote-studio',
  },
  {
    title: 'Space Studio',
    description: 'Guides, technical documentation and training for Space Studio.',
    to: '/docs/space-studio',
  },
  {
    title: 'Dedupe Manager',
    description: 'Guides, technical documentation and training for Dedupe Manager.',
    to: '/docs/dedupe-manager',
  },
  {
    title: 'Salesforce Trigger Manager',
    description: 'Guides, technical documentation and training for Salesforce Trigger Manager.',
    to: '/docs/salesforce-trigger-manager',
  },
  {
    title: 'AWS File Manager',
    description: 'Guides, technical documentation and training for AWS File Manager.',
    to: '/docs/aws-file-manager',
  },
  {
    title: 'SharePoint File Manager',
    description: 'Guides, technical documentation and training for SharePoint File Manager.',
    to: '/docs/sharepoint-file-manager',
  },
  {
    title: 'Dropbox File Manager',
    description: 'Guides, technical documentation and training for Dropbox File Manager.',
    to: '/docs/dropbox-file-manager',
  },
  {
    title: 'Google Drive File Manager',
    description: 'Guides, technical documentation and training for Google Drive File Manager.',
    to: '/docs/google-drive-file-manager',
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
            <Heading as="h2" id="products">Products</Heading>
            <Cards items={products} />
          </div>
        </section>
      </main>
    </Layout>
  );
}
