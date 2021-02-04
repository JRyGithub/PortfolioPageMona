
import * as React from "react";
import './InformationSection.scss'

function InformationSection() {
    return (
        <article class="cf">
            <div class="fr w-25 bg-light-gray tc vh-100">
                <img src="https://images.unsplash.com/photo-1489506449317-601a3d1520ea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" class="mw-100 min-h-100" alt="night sky over water" />
            </div>
            <div class="fr w-25 bg-light-gray tc vh-100">
                <div class="fr pa3 pa4-ns bg-white black-70 measure-narrow f3 times vh-100">
                    <header class="bb b--black-70 pv4">
                        <h3 class="f2 fw7 ttu tracked lh-title mt0 mb3 avenir">Green Eggs and Ham</h3>
                        <h4 class="f3 fw4 i lh-title mt0">Paris, France</h4>
                    </header>
                    <section class="pt5 pb4">
                        <p class="times lh-copy measure f4 mt0">
                            I am Daniel

                            I am Sam
                            Sam I am

                            That Sam-I-am
                            That Sam-I-am!
                            I do not like
                            That Sam-I-am

                            Do you like
                            Green eggs and ham

                            I do not like them,
                            Sam-I-am.
                            I do not like
                            Green eggs and ham.

                            Would you like them
                            Here or there?

                            I would not like them
                            Here or there.
                            I would not like them
                            Anywhere.
                            I do not like
                            Green eggs and ham.
                            I do not like them,
                            Sam-I-am

                            Would you like them
                            In a house?
                            Would you like them
                            With a mouse?

                            I do not like them
                            In a house.
                            I do not like them
                            With a mouse.
                            I do not like them
                            Here or there.
                            I do not like them
                            Anywhere.
                            I do not like green eggs and ham.
                            I do not like them, Sam-I-am.
                            <br/>
                            <br/>
                            <em>If you would love to chat email me here:</em>
                            <br/>
                            mona.harnett@gmail.com
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
//<div class="cf backgroundSlidOn vh-100">