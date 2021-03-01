
import * as React from "react";
import './InformationSection.scss'

function InformationSection() {
    return (
        <article class="cf">
            <div class="fr w-25 bg-light-gray tc vh-100">
                <div className="vh-25 flex">
                    <div className="bgaqua h-100 w-40 dim">
                        <img src="https://raw.githubusercontent.com/JRyGithub/PortfolioPageMona/responsiveAndTileAdder/src/images/flowers.jpg" className="mw-100 min-h-100 pictureInRubric"/>
                    </div>
                    <div className="bgred h-100 w-60 dim">
                        <img src="https://raw.githubusercontent.com/JRyGithub/PortfolioPageMona/responsiveAndTileAdder/src/images/colorPainting.jpg" className="mw-100 min-h-100 pictureInRubric"/>
                    </div>
                </div>
                <div className="vh-50 flex dib w-100">
                    <div className="w-100">
                        <div className="bgblue w-100 h-50 dim">
                            <img src="https://images.pexels.com/photos/1702624/pexels-photo-1702624.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="mw-100 min-h-100 pictureInRubric"/>
                        </div>
                        <div className="bggreen w-100 h-50 dim">
                            <img src="https://raw.githubusercontent.com/JRyGithub/PortfolioPageMona/responsiveAndTileAdder/src/images/phonePic.jpg" className="mw-100 min-h-100 pictureInRubric"/>
                        </div>
                    </div>
                    <div className="w-100">
                        <div className="bgpink w-100 h-75 dim">
                            <img src="https://raw.githubusercontent.com/JRyGithub/PortfolioPageMona/responsiveAndTileAdder/src/images/greenFlower.jpg" className="mw-100 min-h-100 pictureInRubric"/>
                        </div>
                        <div className="bgsilver w-100 h-25 dim">
                            <img src="https://raw.githubusercontent.com/JRyGithub/PortfolioPageMona/responsiveAndTileAdder/src/images/painting.jpg" className="mw-100 min-h-100 pictureInRubric"/>
                        </div>  
                    </div>                 
                </div>
                <div className="vh-25 flex">
                    <div className="bgblack w-60 dim">
                        <img src="https://raw.githubusercontent.com/JRyGithub/PortfolioPageMona/responsiveAndTileAdder/src/images/houseAndSky.jpg" className="mw-100 min-h-100 pictureInRubric"/>
                    </div>
                    <div className="bgyellow w-40 dim">
                        <img src="https://raw.githubusercontent.com/JRyGithub/PortfolioPageMona/responsiveAndTileAdder/src/images/bagOnHead.jpg" className="mw-100 min-h-100 pictureInRubric"/>
                    </div>
                </div>           
            </div>
            <div class="fr w-25 bg-light-gray tc vh-100">
                <div class="fr pa3 pa4-ns bg-white black-70 measure-narrow f3 times vh-100">
                    <header class="bb b--black-70 pv4">
                        <h3 class="f2 fw7 ttu tracked lh-title mt0 mb3 avenir">Mona Tamara Anaïs Harnett</h3>
                        <h4 class="f3 fw4 i lh-title mt0">Curious. Globetrotter. Economist</h4>
                    </header>
                    <section class="pt5 pb4">
                        <p class="times lh-copy measure f4 mt0">
                        Welcome to my little webpage, where I house a collection of projects and essays I’m accumulating through out my life.
                        Frankly everything interests me, which is why I studied economics. The subject is an attempt to understand the workings of our society, disentangling what in our lives is controllable like a science and what is effortless art.I would still proclaim my inner-self as a shy Japanese girl, after having lived there for the first 8 years of my life. 
                        But most would say the very opposite. My early maturity was nurturing and free roaming amongst the beauty of New Zealand  and now I’m adoring living in the metropole pop of Paris.
                        Just here looking to do some good in our little world.
                        Feel free to get in touch with comments, collaborations & cohesions.
                        <br/>
                        MH.
                        </p>
                        <div className="imagesDiv">
                            <a
                                className="link hover-pink near-black dib h2 w2 mr3 footerIcon"
                                href="https://www.linkedin.com/in/mona-harnett-10a806115/"
                            >
                                <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="1.414"
                                >
                                    <path
                                        d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z"
                                        fill-rule="nonzero"
                                    />
                                </svg>
                            </a>
                            <a class="link hover-pink near-black dib h2 w2 mr3" href="https://medium.com/@mrmrs_/" title="Medium">
                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M11.824 12.628l-.276.45.798.398 2.744 1.372c.15.076.294.11.418.11.278 0 .467-.177.467-.492V5.883l-4.15 6.745zm4.096-8.67c-.004-.003 0-.01-.003-.012l-4.825-2.412c-.06-.03-.123-.038-.187-.044-.016 0-.03-.01-.047-.01-.184 0-.368.092-.467.254l-.24.39-.5.814-1.89 3.08 1.89 3.076.5.813.5.812.59.95 4.71-7.64c.02-.03.01-.06-.02-.08zm-6.27 7.045L7.17 6.97l-.295-.477-.294-.477-.25-.416v4.867l3.32 1.663.5.25.5.25-.5-.813-.5-.813zM.737 1.68L.59 1.608c-.085-.042-.166-.062-.24-.062-.206 0-.35.16-.35.427v10.162c0 .272.2.594.442.716l4.145 2.08c.107.06.208.08.3.08.257 0 .438-.2.438-.53V4.01c0-.02-.012-.04-.03-.047L.738 1.68z" /></svg>
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </article>
    );

}
export default InformationSection;

{/* <div class="fl w-50 w-50-l overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1489506449317-601a3d1520ea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" class="mw-100 min-h-100 dim" alt="night sky over water" />
                </div>
                <div class="fl w-50 w-50-ns overflow-hidden">
                    <img src="https://preview.redd.it/odp5mi64gyy21.png?width=960&crop=smart&auto=webp&s=a789606eedce25cc00ca4d81b34f81e7803cc30c" class="mw-100 min-h-100 dim cover"></img>
                </div>
                <div class="fl w-50 pt0 overflow-hidden">
                    <img src="https://preview.redd.it/viynhsjiiet11.png?width=960&crop=smart&auto=webp&s=326966d17b05285183d9d6019be73dd4299a42a5" class="mw-100 min-h-100 dim cover"></img>
                </div>
                <div class="fl w-50 w-50-ns overflow-hidden">
                    <img src="https://preview.redd.it/odp5mi64gyy21.png?width=960&crop=smart&auto=webp&s=a789606eedce25cc00ca4d81b34f81e7803cc30c" class="mw-100 min-h-100 dim cover"></img>
                </div>
                <div class="fl w-50 pt0 overflow-hidden">
                    <img src="https://preview.redd.it/viynhsjiiet11.png?width=960&crop=smart&auto=webp&s=326966d17b05285183d9d6019be73dd4299a42a5" class="mw-100 min-h-100 dim cover"></img>
                </div>
                <div class="fl w-50 w-50-ns overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1489506449317-601a3d1520ea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" class="mw-100 min-h-100 dim" alt="night sky over water" />
                </div>
                <div class="fl w-50 w-50-ns overflow-hidden">
                    <img src="https://preview.redd.it/odp5mi64gyy21.png?width=960&crop=smart&auto=webp&s=a789606eedce25cc00ca4d81b34f81e7803cc30c" class="mw-100 min-h-100 dim cover"></img>
                </div>
                <div class="fl w-50 w-50-ns overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1489506449317-601a3d1520ea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" class="mw-100 min-h-100 dim" alt="night sky over water" />
                </div>
                <div class="fl w-50 w-50-ns overflow-hidden">
                    <img src="https://preview.redd.it/odp5mi64gyy21.png?width=960&crop=smart&auto=webp&s=a789606eedce25cc00ca4d81b34f81e7803cc30c" class="mw-100 min-h-100 dim cover"></img>
                </div>
                <div class="fl w-50 pt0 overflow-hidden">
                    <img src="https://preview.redd.it/viynhsjiiet11.png?width=960&crop=smart&auto=webp&s=326966d17b05285183d9d6019be73dd4299a42a5" class="mw-100 min-h-100 dim cover"></img>
                </div> */}
                /*<div class="fl w-100 w-50-ns ph2">
<a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/elevaters030211_960.jpg" /></a>
<a href="" class="no-underline pv2 grow db"><img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/elevaters.jpg" /></a>
<a href="#" class="no-underline pv2 grow db"><img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/pink-and-noseworthy-22.12.10-cargo_960.jpg" /></a>
<a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hw090911_960.jpg" /></a>
</div>
<div class="fl w-50 w-25-ns ph2">
<a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/adam-stern-031209_960-2.jpg" /></a>
<a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hw-080411-cargo_960.jpg" /></a>
<a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hw18-240112-cc_960.jpg" /> </a>
<a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/orchid-2-mnkr_960.jpg" /></a>
<a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/O270711_960-2.jpg" /></a>
<a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/adam-stern-020510_960.jpg" /></a>
<a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/adam-stern-130610_960.jpg" /></a>
</div>
<div class="fl w-50 w-25-ns ph2">
<a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/zach-hurd-101218_960.jpg" /></a>
<a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/zh170311.4.cargo_960.jpg" /></a>
<a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hwspringtour-cargo_960-1.jpg" /></a>
<a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/cc-shanee_960.jpg" /></a>
<a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/ZachHurd-190111s_960.jpg" /></a>
<a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hw170211pie-cargo_960.jpg" /></a>
<a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/adam-stern-191110_960.jpg" /></a>
</div>*/