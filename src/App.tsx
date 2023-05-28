//Components
import Button, { buttonVariants } from "~/components/Button";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { Icons } from "./components/Icons";

//Misc
import React, { useState } from "react";
import use3dEffect from "./lib/hooks/use3dEffect";
import { cn } from "~/lib/utils";
import useBlobEffect from "~/lib/hooks/useBlobEffect";
import maleSvg from "~/assets/male.svg";
import ideasSvg from "~/assets/ideas.svg";
import flersonLogoSvg from "~/assets/flerson-logo.svg";
import aptivoLogo from "~/assets/aptivo-logo.png";
import gmPartsLogoSvg from "~/assets/gmparts-logo.svg";
import websandLogo from "~/assets/websand-logo.png";
import writtenTroveLogoSvg from "~/assets/writtentrove-icon.svg";

function App() {
  const [showContactMenu, setShowContactMenu] = useState(false);

  const {
    blobRef,
    blurRef,
    pointerRef,
    styles: blobStyles,
  } = useBlobEffect("var(--blob-gradient)");

  const { animateElRef, isEnteringContainer, containerRef } = use3dEffect({
    divideBy: 30,
    useWindowForRotation: true,
  });

  return (
    <>
      {blobStyles}
      <header className="flex justify-between px-6 py-4 relative z-20">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-[100%] bg-primary mr-3"></div>
          <h2 className="text-lg uppercase font-extrabold">Abe</h2>
        </div>
        <div className="md:hidden">
          <NavigationMenu.Root className="relative z-[1]">
            <NavigationMenu.List className="center flex list-none ">
              <NavigationMenu.Item>
                <NavigationMenu.Trigger
                  className={cn(
                    buttonVariants({ variant: "secondary" }),
                    "group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none"
                  )}
                >
                  Contact
                  <CaretDownIcon
                    className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                    aria-hidden
                  />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute top-12 -right-4 w-fit sm:w-auto bg-accent-1 rounded-lg">
                  <ul className="one m-0 list-none p-[22px] sm:w-[500px] w-[300px] ">
                    <ListItem
                      href="https://www.linkedin.com/in/abe-suni-caymo-48b7ab169/"
                      title={
                        <div className="flex gap-2 items-center">
                          <Icons.linkedin width={20} />
                          LinkedIn
                        </div>
                      }
                    />
                    <ListItem
                      href="https://github.com/abetoots"
                      title={
                        <div className="flex gap-2 items-center">
                          <Icons.gitHub width={20} />
                          Github
                        </div>
                      }
                    />
                    <ListItem
                      href="mailto:caymo.abesuni@gmail.com"
                      title={
                        <div className="flex gap-2 items-center">
                          <Icons.email width={20} />
                          caymo.abesuni@gmail.com
                        </div>
                      }
                    />
                    <ListItem
                      href="#"
                      title={
                        <div className="flex gap-2 items-center">
                          <Icons.phone width={20} />
                          +639062539734
                        </div>
                      }
                    />{" "}
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </div>
        <div className="hidden md:flex items-center">
          <div
            className={cn(
              "visually-hidden transition ease-in-out opacity-0 duration-1000",
              {
                "visually-shown opacity-100": showContactMenu,
              }
            )}
          >
            <ul className="flex items-center flex-wrap justify-center">
              <li className="mr-4">
                <a href="https://www.linkedin.com/in/abe-suni-caymo-48b7ab169/">
                  <div className="flex gap-2 items-center">
                    <Icons.linkedin width={20} />
                    LinkedIn
                  </div>
                </a>
              </li>
              <li className="mr-4">
                <a href="https://github.com/abetoots">
                  <div className="flex gap-2 items-center">
                    <Icons.gitHub width={20} />
                    Github
                  </div>
                </a>
              </li>
              <li className="mr-4">
                <a href="mailto:caymo.abesuni@gmail.com">
                  <div className="flex gap-2 items-center">
                    <Icons.email width={20} />
                    caymo.abesuni@gmail.com
                  </div>
                </a>
              </li>
              <li className="mr-4">
                <div className="flex gap-2 items-center">
                  <Icons.phone width={20} />
                  +639062539734
                </div>
              </li>
            </ul>
          </div>
          <Button
            variant="secondary"
            onClick={() => {
              setShowContactMenu((prev) => !prev);
            }}
          >
            Contact Me
          </Button>
        </div>
      </header>
      <main className="px-6">
        <section
          ref={pointerRef}
          className="md:grid grid-cols-[8fr_5fr] gap-6 mb-12"
        >
          <div className="paper relative overflow-hidden mb-6 md:mb-0 ">
            {/* @ts-ignore */}
            <div id="blob" ref={blobRef} />
            {/* @ts-ignore */}
            <div id="blur" ref={blurRef} />
            <div className="relative z-10 p-6">
              <h1 className="text-4xl md:text-[3.5rem] font-extrabold cursor-default mb-6 leading-relaxed">
                Hi, I'm Abe, a software developer with 3+ years of experience.
              </h1>
              <p className="text-lg font-medium mb-6 leading-relaxed">
                I love to be at the forefront of technological innovation and
                enjoy creating delightful user experiences. I ensure my passion
                for software development has a positive impact to the lives of
                many.
              </p>
              <div className="flex gap-6">
                <a href="https://www.linkedin.com/in/abe-suni-caymo-48b7ab169/">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-secondary rounded-full flex justify-center items-center text-accent-1">
                    <Icons.linkedin className="md:w-5 md:h-5" />
                  </div>
                </a>
                <a href="https://github.com/abetoots">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-secondary rounded-full flex justify-center items-center text-accent-1 ">
                    <Icons.gitHub className="md:w-5 md:h-5" />
                  </div>
                </a>
                <a href="mailto:caymo.abesuni@gmail.com">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-secondary rounded-full flex justify-center items-center text-accent-1">
                    <Icons.email className="md:w-7 md:h-7" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="paper relative hidden md:block overflow-hidden">
            <div className="relative mt-16 z-[2] h-96 mx-auto">
              <img className="mx-auto h-full" src={maleSvg} alt="Male Avatar" />
            </div>
            <div className="absolute z-[1] top-0 w-full">
              <img className="w-full " src={ideasSvg} alt="Idea Icons" />
            </div>
          </div>
        </section>
        <h2 className="text-2xl font-bold text-center mb-6">Works</h2>
        <section className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            className="bg-sky-100"
            title="Aptivo"
            description="B2B Software-as-a-Service Web App"
            imgUrl={aptivoLogo}
            imgAlt="Aptivo Logo"
            href="https://aptivo-962i.vercel.app/"
            imageClassName="w-1/2  h-auto"
          />
          <ProjectCard
            className="bg-orange-100"
            title="Flerson"
            description="Job Search Platform"
            imgUrl={flersonLogoSvg}
            imgAlt="Flerson Logo"
            href="https://flerson.com"
          />

          <ProjectCard
            className="bg-blue-100"
            title="GM Genuine Parts"
            description="Automotive Parts E-Commerce Platform"
            imgUrl={gmPartsLogoSvg}
            imgAlt="GM Parts Logo"
            href="https://gmparts.com"
          />
          <ProjectCard
            className="bg-indigo-100"
            title="Websand"
            description="B2B Marketing Automation Platform"
            imgUrl={websandLogo}
            imgAlt="Websand Logo"
            href="https://v4wbsd.com"
            imageClassName="w-1/2 h-auto"
          />
          <ProjectCard
            className="bg-gray-100"
            title="Written Trove"
            description="Blog"
            imgUrl={writtenTroveLogoSvg}
            imgAlt="Written Trove Logo"
            href="https://writtentrove.com"
          />
        </section>
      </main>
      <footer className="px-6 py-12"></footer>
    </>
  );
}

export default App;

const ProjectCard = ({
  title,
  description,
  imgUrl,
  imgAlt,
  href,
  className,
  imageClassName,
}: {
  title: string;
  description: string;
  imgUrl: string;
  imgAlt: string;
  className?: string;
  imageClassName?: string;
  href: string;
}) => {
  const { animateElRef, containerRef, isEnteringContainer } =
    use3dEffect<HTMLDivElement>({
      divideBy: 25,
      perspective: "1000px",
    });

  return (
    <div ref={containerRef} style={{ perspective: "1000px" }}>
      <div
        className={cn("paper rounded-3xl p-6", className)}
        ref={animateElRef}
        style={{
          transformStyle: "preserve-3d",
          transition: isEnteringContainer ? "none" : "transform 0.5s ease",
        }}
      >
        <h3
          className="text-xl font-semibold mb-3 cursor-pointer underline"
          style={{
            transition: "all 0.75s ease-out",
            transform: isEnteringContainer ? "translateZ(70px)" : "",
          }}
        >
          <a href={href} target="_blank" className="flex gap-2 items-center">
            {title}
            <div className={cn(buttonVariants({ variant: "secondary" }))}>
              <span className="mr-2">Visit</span> <Icons.externalLink />
            </div>
          </a>
        </h3>
        <p
          className="mb-6"
          style={{
            transition: "all 0.75s ease-out",
            transform: isEnteringContainer ? "translateZ(50px)" : "",
          }}
        >
          {description}
        </p>

        <div
          className="h-60 flex items-center justify-center"
          style={{
            transition: "all 0.75s ease-out",
            transform: isEnteringContainer ? "translateZ(100px)" : "",
          }}
        >
          <img
            className={cn("mx-auto h-full", imageClassName)}
            src={imgUrl}
            alt={imgAlt}
          />
        </div>
      </div>
    </div>
  );
};

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "title"> &
    React.PropsWithChildren<{
      className?: string;
      title: React.ReactNode;
      as?: JSX.Element;
    }>
>(({ className, children, title, as, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        className={cn(
          "focus:shadow-[0_0_0_2px] focus:shadow-violet7 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">
          {title}
        </div>
        <p className="text-mauve11 leading-[1.4]">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));
