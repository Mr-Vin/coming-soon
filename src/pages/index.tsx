import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="The Maroon Code"
        description="Want to know where you're bad at? The Maroon Code AI is about to launch something!"
      />
      <Header />
      <main>
        <PricingTable />
      </main>
      <Footer />
    </Page>
  );
}
