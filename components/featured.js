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
                    <a href="/posts/my-udacity-course-for-becoming-a-react-developer" className="image"><img src="//images.ctfassets.net/9h0x5en6hj8l/78I4zfNzDMBoDdCiPfrCRk/7df4156cedfebff0382dcb386c6993b5/carousel-gf28a64b2b_1280.png" alt="" /></a>
                </article>
            </li>
            <li>
                <article>
                    <header>
                        <h3><a href="/posts/lazy-loading-images-in-react-js">LAZY LOADING IMAGES IN REACT JS</a></h3>
                        <time className="published" dateTime="2015-10-20">March 9, 2018</time>
                    </header>
                    <a href="/posts/lazy-loading-images-in-react-js" className="image"><img src="//images.ctfassets.net/9h0x5en6hj8l/3jF5N7XiIMQis0aI4iyam4/16b32b20ce69524e5f3fa4e2886e444e/react-hero.png" alt="" /></a>
                </article>
            </li>
            <li>
                <article>
                    <header>
                        <h3><a href="/posts/cpu-mining-altcoins-turtlecoin-trtl-on-an-sbc">CPU MINING ALTCOINS (TURTLECOIN TRTL) ON AN SBC</a></h3>
                        <time className="published" dateTime="2015-10-20">January 26, 2018</time>
                    </header>
                    <a href="/posts/cpu-mining-altcoins-turtlecoin-trtl-on-an-sbc" className="image"><img src="//images.ctfassets.net/9h0x5en6hj8l/1JPCQizNLCAMA8qm0WIYYe/39683d293f73c6ec5690a51bea0d5b14/image-3046639_1280.png" alt="" /></a>
                </article>
            </li>
            <li>
                <article>
                    <header>
                        <h3><a href="/posts/building-a-portable-vpn-router-with-an-ad-blocker">BUILDING A PORTABLE VPN ROUTER WITH AN AD BLOCKER</a></h3>
                        <time className="published" dateTime="2015-10-20">November 3, 2017</time>
                    </header>
                    <a href="/posts/building-a-portable-vpn-router-with-an-ad-blocker" className="image"><img src="//images.ctfassets.net/9h0x5en6hj8l/5zkrLiloPK4SIcIwSA20KW/a4f3a2b183fce381705848ce4c16ce39/castle-2688938_1280.jpg" alt="" /></a>
                </article>
            </li>
        </ul>
    </section>
)

export default Featured