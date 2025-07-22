import HomePage from '@/components/pages/HomePage/HomePage.page';
import SubscribersAmount from '@/components/pages/Stats/Stats.page';
import Contact from '@/components/pages/Contact/Contact.page';
import Footer from '@/components/pages/Footer/Footer.page';
import Opinions from '@/components/pages/Opinions/Opinions.page';
import Projects from '@/components/pages/Projects/Projects.page';
import { Ebook } from '@/components/pages/EBook/Ebook.page';
import Services from '@/components/pages/Services/Services.page';
import Header from '@/components/pages/Header/Header.component';
import Collaboration from '@/components/pages/Collaboration/Collaboration.page';
import { AboutMe } from '@/components/pages/AboutMe';
import { BusinessImpact } from '@/components/pages/BusinessImpact';
import ProfitabilitySection from '@/components/pages/ProfitabilitySection/ProfitabilitySection.component';
import AnchorScrollProvider from '@/components/AnchorScrollProvider';
import { getProjects } from '@/actions/projects.actions';
import { getOpinions } from '@/actions/opinions.actions';

export default async function Home() {
  try {
    const [projectsArr, opinionsArr] = await Promise.all([getProjects(), getOpinions()]);

    const projects =
      projectsArr && projectsArr.length > 0 ? [{ projects: projectsArr[0].projects }] : [];
    const opinions = opinionsArr ?? [];

    return (
      <AnchorScrollProvider>
        <Header />
        <HomePage />
        <Ebook />
        <BusinessImpact />
        <ProfitabilitySection />
        <AboutMe />
        <Services />
        <SubscribersAmount />
        <Projects projects={projects} />
        <Opinions opinions={opinions} />
        <Collaboration />
        <Contact />
        <Footer />
      </AnchorScrollProvider>
    );
  } catch (error) {
    console.error('Error in Home page:', error);

    return (
      <AnchorScrollProvider>
        <Header />
        <HomePage />
        <Ebook />
        <BusinessImpact />
        <ProfitabilitySection />
        <AboutMe />
        <Services />
        <SubscribersAmount />
        <Projects projects={[]} />
        <Opinions opinions={[]} />
        <Collaboration />
        <Contact />
        <Footer />
      </AnchorScrollProvider>
    );
  }
}
