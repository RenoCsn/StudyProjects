import logoImg from './assets/pulse-logo.svg'
import testimonialImg from './assets/subvert-avatar.webp'
import { FaqComponent } from './Components/Organisms/Faq'
import { FooterComponent } from './Components/Organisms/Footer'
import { HeaderComponent } from './Components/Organisms/Header'
import { ProductComponent } from './Components/Organisms/Product'
import { faqTexts, footerTexts, headerTexts, testimonialTexts } from './content'
import { TestimonialComponent } from './Components/Organisms/Testimonial'

function App() {
  return (
    <>
      <HeaderComponent
        logo={{ url: '/', img: logoImg }}
        items={headerTexts.items}
        signUp={headerTexts.signUp}
      />
      <ProductComponent
        title={''}
        subtitle={''}
        freeCard={''}
        normalCard={''}
        premiumCard={''}
      />
      <TestimonialComponent
        testimonialText={testimonialTexts.testimonialText}
        brandName={testimonialTexts.brandName}
        img={testimonialImg}
      />
      <FaqComponent title={faqTexts.title} faqItens={faqTexts.faqItens} />
      <FooterComponent logo={{ url: '/', img: logoImg }} {...footerTexts} />
    </>
  )
}

export default App
