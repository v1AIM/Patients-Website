// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kHCKEcYWcmWFvnZ511qGxj
// Component: t4HNrwUmK4YwQE
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header2 from "../../Header2"; // plasmic-import: GK7fqNotJaxKqIk/component
import Button from "../../Button"; // plasmic-import: ID408cV-KrF2KD/component
import Testimonial from "../../Testimonial"; // plasmic-import: r6Cl0pKnHnT6qh/component
import BlogPosts from "../../BlogPosts"; // plasmic-import: MzKb43hmwTDa-s/component
import CtaBlock from "../../CtaBlock"; // plasmic-import: dJmmdVEbQ6D79y/component
import HeroSection from "../../HeroSection"; // plasmic-import: juY6mhOC63OYiI0/component
import Footer from "../../Footer"; // plasmic-import: BMHqzSi3MkEVmjN/component
import { useScreenVariants as useScreenVariantshcOoyKrhLFmmbl0 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: hcOoyKrhLFmmbl0/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_saa_s_website.module.css"; // plasmic-import: kHCKEcYWcmWFvnZ511qGxj/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: t4HNrwUmK4YwQE/css
import ArrowRightsvgIcon from "./icons/PlasmicIcon__ArrowRightsvg"; // plasmic-import: Q1nyCXo_O37SG_I/icon
import corinneKutzTMi2R5NfoUnsplashjpg81On6WuZbCzxt2M from "./images/corinneKutzTMi2R5NfoUnsplashjpg.jpg"; // plasmic-import: 81on6wuZbCzxt2m/picture
import tiffanyTertipesNxcs8Wwj9J0UnsplashjpgPsBffs03SOmWvL from "./images/tiffanyTertipesNxcs8Wwj9J0Unsplashjpg.jpg"; // plasmic-import: PSBffs03sOMWv-l/picture
import xpsOcAuPlfZxEcUnsplashjpg0CsbO9M88DoZqok from "./images/xpsOcAuPlfZxEcUnsplashjpg.jpg"; // plasmic-import: 0csbO9m88doZqok/picture
import mepng2CrmKw1CZn2ODx2 from "./images/mepng.png"; // plasmic-import: 2crmKW1cZn2oDX2/picture
import thumbAvatar1583758683JpgUqzFjdJcNxHh4Yw from "./images/thumbAvatar1583758683Jpg.jpg"; // plasmic-import: UQZFjdJcNXHh4Yw/picture

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHomepage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantshcOoyKrhLFmmbl0()
  });
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        {true ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"root"}
            data-plasmic-override={overrides.root}
            data-plasmic-root={true}
            data-plasmic-for-node={forNode}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.root_reset,
              projectcss.plasmic_default_styles,
              projectcss.plasmic_mixins,
              projectcss.plasmic_tokens,
              sty.root
            )}
          >
            <div className={classNames(projectcss.all, sty.freeBox__odRhN)}>
              <div className={classNames(projectcss.all, sty.freeBox__peAju)}>
                <Header2
                  data-plasmic-name={"header2"}
                  data-plasmic-override={overrides.header2}
                  className={classNames("__wab_instance", sty.header2)}
                />

                <div className={classNames(projectcss.all, sty.freeBox__t75Yv)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__cb2TZ)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__fwLbV)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__ldR49
                        )}
                      >
                        <h1
                          data-plasmic-name={"h1"}
                          data-plasmic-override={overrides.h1}
                          className={classNames(
                            projectcss.all,
                            projectcss.h1,
                            projectcss.__wab_text,
                            sty.h1
                          )}
                        >
                          {hasVariant(globalVariants, "screen", "mobileOnly")
                            ? "Ready to accept or acquiesce willing."
                            : "Hero for your SaaS landing page."}
                        </h1>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__kw3HJ
                          )}
                        >
                          {
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ."
                          }
                        </div>
                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button__fbONj
                          )}
                          endIcon={
                            <ArrowRightsvgIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__utAgq
                              )}
                              role={"img"}
                            />
                          }
                          submitsForm={true}
                        >
                          {"Get started"}
                        </Button>
                      </p.Stack>
                    </p.Stack>
                    <div
                      className={classNames(projectcss.all, sty.freeBox__tw1CK)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__mGo2A
                        )}
                      />
                    </div>
                  </p.Stack>
                </div>
              </div>
            </div>
            {true ? (
              <section
                data-plasmic-name={"features"}
                data-plasmic-override={overrides.features}
                className={classNames(projectcss.all, sty.features)}
              >
                <div className={classNames(projectcss.all, sty.column___8Xls2)}>
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__ypezz
                    )}
                  >
                    {"Patients"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__a7DlD
                    )}
                  >
                    {
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \nLorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    }
                  </div>
                  <div
                    data-plasmic-name={"container4"}
                    data-plasmic-override={overrides.container4}
                    className={classNames(projectcss.all, sty.container4)}
                  >
                    <div
                      data-plasmic-name={"outerRow2"}
                      data-plasmic-override={overrides.outerRow2}
                      className={classNames(projectcss.all, sty.outerRow2)}
                    >
                      <div
                        data-plasmic-name={"row2"}
                        data-plasmic-override={overrides.row2}
                        className={classNames(projectcss.all, sty.row2)}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__xNtf8
                          )}
                        >
                          {true ? (
                            <p.Stack
                              as={"div"}
                              hasGap={true}
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__monJ
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox__dBctP
                                )}
                              />

                              <h3
                                className={classNames(
                                  projectcss.all,
                                  projectcss.h3,
                                  projectcss.__wab_text,
                                  sty.h3__qOiKj
                                )}
                              >
                                {"Some value proposition of your service."}
                              </h3>
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__nzGO
                                )}
                              >
                                {
                                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                }
                              </div>
                              <Button
                                className={classNames(
                                  "__wab_instance",
                                  sty.button__xn2Uf
                                )}
                                color={"blue"}
                                endIcon={
                                  <ArrowRightsvgIcon
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg__st6BF
                                    )}
                                    role={"img"}
                                  />
                                }
                                shape={"rounded"}
                                showEndIcon={true}
                                submitsForm={true}
                              >
                                {"Learn more"}
                              </Button>
                            </p.Stack>
                          ) : null}
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__nzopL
                          )}
                        >
                          {true ? (
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__j91
                              )}
                            >
                              <p.PlasmicImg
                                alt={""}
                                className={classNames(sty.img__iJq1Y)}
                                displayHeight={"400px"}
                                displayMaxHeight={"none"}
                                displayMaxWidth={"none"}
                                displayMinHeight={"0"}
                                displayMinWidth={"0"}
                                displayWidth={"400px"}
                                loading={"lazy"}
                                src={{
                                  src: corinneKutzTMi2R5NfoUnsplashjpg81On6WuZbCzxt2M,
                                  fullWidth: 1920,
                                  fullHeight: 1280,
                                  aspectRatio: undefined
                                }}
                              />
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-plasmic-name={"container5"}
                    data-plasmic-override={overrides.container5}
                    className={classNames(projectcss.all, sty.container5)}
                  >
                    <div
                      data-plasmic-name={"outerRow3"}
                      data-plasmic-override={overrides.outerRow3}
                      className={classNames(projectcss.all, sty.outerRow3)}
                    >
                      <div
                        data-plasmic-name={"row4"}
                        data-plasmic-override={overrides.row4}
                        className={classNames(projectcss.all, sty.row4)}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__aTtHi
                          )}
                        >
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__vy5E3)}
                            displayHeight={"400px"}
                            displayMaxHeight={"none"}
                            displayMaxWidth={"none"}
                            displayMinHeight={"0"}
                            displayMinWidth={"0"}
                            displayWidth={"400px"}
                            loading={"lazy"}
                            src={{
                              src: tiffanyTertipesNxcs8Wwj9J0UnsplashjpgPsBffs03SOmWvL,
                              fullWidth: 1920,
                              fullHeight: 1280,
                              aspectRatio: undefined
                            }}
                          />
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__tByy7
                          )}
                        >
                          {true ? (
                            <p.Stack
                              as={"div"}
                              hasGap={true}
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__uW7K1
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox___9ZaOp
                                )}
                              />

                              <h3
                                className={classNames(
                                  projectcss.all,
                                  projectcss.h3,
                                  projectcss.__wab_text,
                                  sty.h3__qcQie
                                )}
                              >
                                {"Some value proposition of your service."}
                              </h3>
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__mYPgZ
                                )}
                              >
                                {
                                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                }
                              </div>
                              <Button
                                className={classNames(
                                  "__wab_instance",
                                  sty.button__dUh5
                                )}
                                color={"blue"}
                                endIcon={
                                  <ArrowRightsvgIcon
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg__yEvmj
                                    )}
                                    role={"img"}
                                  />
                                }
                                shape={"rounded"}
                                showEndIcon={true}
                                submitsForm={true}
                              >
                                {"Learn more"}
                              </Button>
                            </p.Stack>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-plasmic-name={"container6"}
                    data-plasmic-override={overrides.container6}
                    className={classNames(projectcss.all, sty.container6)}
                  >
                    <div
                      data-plasmic-name={"outerRow4"}
                      data-plasmic-override={overrides.outerRow4}
                      className={classNames(projectcss.all, sty.outerRow4)}
                    >
                      <div
                        data-plasmic-name={"row3"}
                        data-plasmic-override={overrides.row3}
                        className={classNames(projectcss.all, sty.row3)}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__phFx2
                          )}
                        >
                          {true ? (
                            <p.Stack
                              as={"div"}
                              hasGap={true}
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__tz0
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox__eEz7
                                )}
                              />

                              <h3
                                className={classNames(
                                  projectcss.all,
                                  projectcss.h3,
                                  projectcss.__wab_text,
                                  sty.h3__qiiXn
                                )}
                              >
                                {"Some value proposition of your service."}
                              </h3>
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__wDYw
                                )}
                              >
                                {
                                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                }
                              </div>
                              <Button
                                className={classNames(
                                  "__wab_instance",
                                  sty.button__dd0NC
                                )}
                                color={"blue"}
                                endIcon={
                                  <ArrowRightsvgIcon
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg__vUqzs
                                    )}
                                    role={"img"}
                                  />
                                }
                                shape={"rounded"}
                                showEndIcon={true}
                                submitsForm={true}
                              >
                                {"Learn more"}
                              </Button>
                            </p.Stack>
                          ) : null}
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__lVgjK
                          )}
                        >
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__hso0F)}
                            displayHeight={"400px"}
                            displayMaxHeight={"none"}
                            displayMaxWidth={"none"}
                            displayMinHeight={"0"}
                            displayMinWidth={"0"}
                            displayWidth={"400px"}
                            loading={"lazy"}
                            src={{
                              src: xpsOcAuPlfZxEcUnsplashjpg0CsbO9M88DoZqok,
                              fullWidth: 640,
                              fullHeight: 360,
                              aspectRatio: undefined
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ) : null}
            <section
              data-plasmic-name={"testimonials"}
              data-plasmic-override={overrides.testimonials}
              className={classNames(projectcss.all, sty.testimonials)}
            >
              <div className={classNames(projectcss.all, sty.column__emmtf)}>
                <h2
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2__dcJg7
                  )}
                >
                  {"Testimonials"}
                </h2>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___1FgqT
                  )}
                >
                  {
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \nLorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  }
                </div>
                <div className={classNames(projectcss.all, sty.columns__ninyk)}>
                  <div
                    className={classNames(projectcss.all, sty.column__pkWi2)}
                  >
                    <Testimonial
                      data-plasmic-name={"testimonial"}
                      data-plasmic-override={overrides.testimonial}
                      className={classNames("__wab_instance", sty.testimonial)}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.column__osl6N)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.columns__yaj)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__a5Q86
                        )}
                      >
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img___7EQnM)}
                          displayHeight={"auto"}
                          displayMaxHeight={"none"}
                          displayMaxWidth={"100%"}
                          displayMinHeight={"0"}
                          displayMinWidth={"0"}
                          displayWidth={"auto"}
                          loading={"lazy"}
                          src={{
                            src: mepng2CrmKw1CZn2ODx2,
                            fullWidth: 140,
                            fullHeight: 140,
                            aspectRatio: undefined
                          }}
                        />

                        <h5
                          className={classNames(
                            projectcss.all,
                            projectcss.h5,
                            projectcss.__wab_text,
                            sty.h5___8CVZ
                          )}
                        >
                          {"Zulia Maron Duo"}
                        </h5>
                        <div
                          before={""}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__jsZc
                          )}
                        >
                          {
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.column__c8N2K)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.columns__wYfnj)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__xxenf
                        )}
                      >
                        <h2
                          className={classNames(
                            projectcss.all,
                            projectcss.h2,
                            projectcss.__wab_text,
                            sty.h2__scpSu
                          )}
                        >
                          {"“"}
                        </h2>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__hgyqt
                          )}
                        >
                          {
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                          }
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.columns__a0EHe
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__pggss
                            )}
                          >
                            <p.PlasmicImg
                              alt={""}
                              className={classNames(sty.img__ozJ59)}
                              displayHeight={"auto"}
                              displayMaxHeight={"none"}
                              displayMaxWidth={"100%"}
                              displayMinHeight={"0"}
                              displayMinWidth={"0"}
                              displayWidth={"auto"}
                              loading={"lazy"}
                              src={{
                                src: thumbAvatar1583758683JpgUqzFjdJcNxHh4Yw,
                                fullWidth: 160,
                                fullHeight: 160,
                                aspectRatio: undefined
                              }}
                            />
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__vUMxo
                            )}
                          >
                            <h5
                              className={classNames(
                                projectcss.all,
                                projectcss.h5,
                                projectcss.__wab_text,
                                sty.h5__x4Fn
                              )}
                            >
                              {"Lorem Ipsum"}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <BlogPosts
              data-plasmic-name={"blogPosts"}
              data-plasmic-override={overrides.blogPosts}
              className={classNames("__wab_instance", sty.blogPosts)}
            />

            {true ? (
              <CtaBlock
                data-plasmic-name={"ctaBlock"}
                data-plasmic-override={overrides.ctaBlock}
                className={classNames("__wab_instance", sty.ctaBlock)}
              />
            ) : null}
            <HeroSection
              data-plasmic-name={"heroSection"}
              data-plasmic-override={overrides.heroSection}
              className={classNames("__wab_instance", sty.heroSection)}
            />

            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          </p.Stack>
        ) : null}
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "header2",
    "h1",
    "features",
    "container4",
    "outerRow2",
    "row2",
    "container5",
    "outerRow3",
    "row4",
    "container6",
    "outerRow4",
    "row3",
    "testimonials",
    "testimonial",
    "blogPosts",
    "ctaBlock",
    "heroSection",
    "footer"
  ],

  header2: ["header2"],
  h1: ["h1"],
  features: [
    "features",
    "container4",
    "outerRow2",
    "row2",
    "container5",
    "outerRow3",
    "row4",
    "container6",
    "outerRow4",
    "row3"
  ],

  container4: ["container4", "outerRow2", "row2"],
  outerRow2: ["outerRow2", "row2"],
  row2: ["row2"],
  container5: ["container5", "outerRow3", "row4"],
  outerRow3: ["outerRow3", "row4"],
  row4: ["row4"],
  container6: ["container6", "outerRow4", "row3"],
  outerRow4: ["outerRow4", "row3"],
  row3: ["row3"],
  testimonials: ["testimonials", "testimonial"],
  testimonial: ["testimonial"],
  blogPosts: ["blogPosts"],
  ctaBlock: ["ctaBlock"],
  heroSection: ["heroSection"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header2: makeNodeComponent("header2"),
    h1: makeNodeComponent("h1"),
    features: makeNodeComponent("features"),
    container4: makeNodeComponent("container4"),
    outerRow2: makeNodeComponent("outerRow2"),
    row2: makeNodeComponent("row2"),
    container5: makeNodeComponent("container5"),
    outerRow3: makeNodeComponent("outerRow3"),
    row4: makeNodeComponent("row4"),
    container6: makeNodeComponent("container6"),
    outerRow4: makeNodeComponent("outerRow4"),
    row3: makeNodeComponent("row3"),
    testimonials: makeNodeComponent("testimonials"),
    testimonial: makeNodeComponent("testimonial"),
    blogPosts: makeNodeComponent("blogPosts"),
    ctaBlock: makeNodeComponent("ctaBlock"),
    heroSection: makeNodeComponent("heroSection"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
