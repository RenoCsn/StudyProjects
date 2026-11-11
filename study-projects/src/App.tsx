import logoImg from './assets/pulse-logo.svg'
import testimonialImg from './assets/subvert-avatar.webp'
import { FaqComponent } from './Components/Organisms/Faq'
import { FooterComponent } from './Components/Organisms/Footer'
import { HeaderComponent } from './Components/Organisms/Header'
import { ProductComponent } from './Components/Organisms/Product'
import { faqTexts, footerTexts, headerTexts, testimonialTexts } from './content'
import { TestimonialComponent } from './Components/Organisms/Testimonial'
import { FreeCard } from './Components/Molecules/CardsTemplate/Free'
import { NormalCard } from './Components/Molecules/CardsTemplate/Normal'
import { PremiumCard } from './Components/Molecules/CardsTemplate/Premium'
import { productTexts } from './content/ProductTexts'

function App() {
  return (
    <>
      <HeaderComponent
        logo={{ url: '/', img: logoImg }}
        items={headerTexts.items}
        signUp={headerTexts.signUp}
      />
      <div
        style={{
          borderBottom: '1px var(--color-border-light) solid',
          backgroundColor: 'var(--color-background-primary-light)',
        }}
      >
        <ProductComponent
          title={productTexts.title}
          subtitle={productTexts.subtitle}
          freeCard={<FreeCard />}
          normalCard={<NormalCard />}
          premiumCard={<PremiumCard />}
        />
        <TestimonialComponent
          testimonialText={testimonialTexts.testimonialText}
          brandName={testimonialTexts.brandName}
          img={testimonialImg}
        />
      </div>
      <FaqComponent title={faqTexts.title} faqItens={faqTexts.faqItens} />
      <FooterComponent logo={{ url: '/', img: logoImg }} {...footerTexts} />
    </>
  )
}

export default App
