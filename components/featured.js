import Image from 'next/image'

const Featured = () => (
    <section>
        <h3>Featured Articles</h3>
        <br />
        <ul className="posts">
            <li>
                <article>
                    <header>
                        <h3><a href="/posts/my-udacity-course-for-becoming-a-react-developer">My Udacity Course for Becoming a React Developer</a></h3>
                        <time className="published" dateTime="2015-10-20">January 1, 2023</time>
                    </header>
                    <a href="/posts/my-udacity-course-for-becoming-a-react-developer" className="image" loading='lazy'>
                        <Image
                            src="https://images.ctfassets.net/9h0x5en6hj8l/78I4zfNzDMBoDdCiPfrCRk/7df4156cedfebff0382dcb386c6993b5/carousel-gf28a64b2b_1280.png"
                            alt="a vector image of a computer with different color components meant to look like a React website."
                            aria-label="a vector image of a computer with different color components meant to look like a React website."
                            loading='lazy'
                            fill
                            className={'nextImage'}
                        />
                    </a>
                </article>
            </li>
            <li>
                <article>
                    <header>
                        <h3><a href="/posts/lazy-loading-images-in-react-js">LAZY LOADING IMAGES IN REACT JS</a></h3>
                        <time className="published" dateTime="2015-10-20">March 9, 2018</time>
                    </header>
                    <a href="/posts/lazy-loading-images-in-react-js" className="image">
                        <Image
                            src="https://images.ctfassets.net/9h0x5en6hj8l/3jF5N7XiIMQis0aI4iyam4/16b32b20ce69524e5f3fa4e2886e444e/react-hero.png"
                            alt="An image with the text 'Lazy Loading Images in ReactJS - Mike Tsamis.' There is a logo for meetup.com/reactNYC and 500tech.com."
                            aria-label="An image with the text 'Lazy Loading Images in ReactJS - Mike Tsamis.' There is a logo for meetup.com/reactNYC and 500tech.com."
                            loading='lazy'
                            fill
                            className={'nextImage'}
                        />
                    </a>
                </article>
            </li>
            <li>
                <article>
                    <header>
                        <h3><a href="/posts/cpu-mining-altcoins-on-an-sbc">CPU MINING ALTCOINS (TURTLECOIN TRTL) ON AN SBC</a></h3>
                        <time className="published" dateTime="2015-10-20">January 26, 2018</time>
                    </header>
                    <a href="/posts/cpu-mining-altcoins-on-an-sbc" className="image">
                        <Image
                            src="https://images.ctfassets.net/9h0x5en6hj8l/1JPCQizNLCAMA8qm0WIYYe/39683d293f73c6ec5690a51bea0d5b14/image-3046639_1280.png"
                            alt="Numerous crypto coin logos such as Bitcoin, Ethereum, LiteCoin, etc. 18 logos total."
                            aria-label="Numerous crypto coin logos such as Bitcoin, Ethereum, LiteCoin, etc. 18 logos total."
                            loading='lazy'
                            fill
                            className={'nextImage'}
                        />
                    </a>
                </article>
            </li>
            <li>
                <article>
                    <header>
                        <h3><a href="/posts/building-a-portable-vpn-router-with-an-ad-blocker">BUILDING A PORTABLE VPN ROUTER WITH AN AD BLOCKER</a></h3>
                        <time className="published" dateTime="2015-10-20">November 3, 2017</time>
                    </header>
                    <a href="/posts/building-a-portable-vpn-router-with-an-ad-blocker" className="image">
                        <Image
                            src="https://images.ctfassets.net/9h0x5en6hj8l/5zkrLiloPK4SIcIwSA20KW/a4f3a2b183fce381705848ce4c16ce39/castle-2688938_1280.jpg"
                            alt="A vector of a lock with a keyhole which represents security."
                            aria-label="A vector of a lock with a keyhole which represents security."
                            loading='lazy'
                            fill
                            className={'nextImage'}
                        />
                    </a>
                </article>
            </li>
        </ul>
    </section>
)

export default Featured