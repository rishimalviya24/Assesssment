import PortfolioCard from '../components/PortfolioCard';
import { PORTFOLIO } from '../data/constants';

export default function ExamplesPage() {
  return (
    <section id="examples" className="bg-black pb-12 sm:pb-16">
      <div className="flex justify-between items-start px-5 sm:px-7 pt-9 pb-5 border-b border-[#1a1a1a]">
        <h2 className="text-[clamp(40px,7vw,84px)] font-black tracking-[-0.02em] leading-none text-white m-0">EXAMPLES</h2>
        <span className="text-[clamp(40px,7vw,84px)] font-black tracking-[-0.02em] leading-none text-white">S-8</span>
      </div>
      <p className="text-[14px] text-white/60 px-5 sm:px-7 mt-5 mb-7" style={{fontFamily:'Switzer,sans-serif'}}>
        Here are 8 highlights from my work:
      </p>
      <div className="portfolio-grid">
        {PORTFOLIO.map((item, i) => (
          <div key={i} className="portfolio-cell px-3 sm:px-4 pb-4 sm:pb-5">
            <PortfolioCard item={item} />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-4 sm:gap-7 px-5 sm:px-7 pt-8 sm:pt-9">
        <span className="text-[12px] sm:text-[13px] font-black tracking-[0.06em] text-white">CHECK OUR FULL PORTFOLIO:</span>
        {['GRAPHIC DESIGN','PHOTOGRAPHY','WEB DEVELOPMENT'].map((l,i) => (
          <a key={i} href="#" className="text-[12px] sm:text-[13px] font-bold tracking-[0.05em] text-white underline underline-offset-[3px] italic opacity-80 hover:opacity-100 transition-opacity" style={{fontFamily:'Switzer,sans-serif'}}>{l}</a>
        ))}
      </div>
    </section>
  );
}
