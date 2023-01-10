import Image from 'next/image'

const Intro = (props) => (
  <section id="intro" className={props.className}>
      <div className="logo">
        <Image
          className="logo-img"
          src="/images/logo.png"
          alt="MikeTsamis.com Logo"
          aria-label="MikeTsamis.com Logo"
          height={72}
          width={72}
        />
      </div>
          <header>
              <h2>Mike<br/>Tsamis</h2>
              <p>IDEATE. CREATE. ITERATE. REPEAT.</p>
          </header>
  </section>
)

export default Intro