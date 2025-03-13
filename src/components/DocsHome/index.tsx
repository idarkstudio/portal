import {
  CarouselCard,
  TeaserCard,
} from "@site/src/components/DocsHome/TeaserCard";
import { QueryClient, QueryClientProvider } from "react-query";
import React, { FC, ReactNode } from "react";

import Blog from "./Blog";
import Link from "@docusaurus/Link";
import LinkArrowRight from "../Common/Icons/LinkArrowRight";
import LinkArrowUpRight from "../Common/Icons/LinkArrowUpRight";
import { NetworkStats } from "./NetworkStats";

const queryClient = new QueryClient();

const links = [
  {
    label: "Eventos y Noticias",
    href: "https://dfinity.org/events-and-news/",
  },
  {
    label: "Grupos de Trabajo Técnicos",
    href: "https://forum.dfinity.org/t/announcing-technical-working-groups/11781",
  },
  {
    label: "Únete al Foro de Desarrolladores",
    href: "https://forum.dfinity.org",
  },
  {
    label: "Horas de Oficina en Discord para Desarrolladores",
    href: "https://discord.internetcomputer.org",
  },
  {
    label: "Subvenciones y Recompensas para Desarrolladores",
    href: "https://dfinity.org/grants/",
  },
  {
    label: "Programa de Recompensas por Errores",
    href: "https://dfinity.org/bug-bounty/",
  },
];

interface TileDescriptor {
  isGhostTile?: boolean;
  action?: ReactNode | null;
  icon?: ReactNode | null;
  description?: ReactNode;
  label?: string;
  invertIconDarkMode?: boolean;
}

const languagesTiles: TileDescriptor[] = [
  {
    label: "Motoko",
    description:
      "Comienza con un lenguaje de dominio específico fácil de aprender, que puede aprovechar las funciones de ICP y también es perfecto para permitir que la IA programe sola cuando se desee. Esta es una excelente opción para principiantes.",
    icon: (
      <img
        src="/img/docs/motoko.svg"
        alt="Documentación de Motoko"
        className="w-10 h-10"
        loading="lazy"
      />
    ),
    action: (
      <Link
        href="/docs/motoko/main/getting-started/motoko-introduction"
        className="button button-ghost rounded-2xl md:w-20 button-with-icon"
        title="Ir a la documentación de Motoko"
      >
        <span className={"md:hidden"}>Ir a la documentación de Motoko</span>
        <LinkArrowRight />
      </Link>
    ),
  },
  {
    label: "Rust",
    description:
      "Usa Rust, un lenguaje de programación de alto rendimiento y seguro, para desarrollar aplicaciones de alta eficiencia en Internet Computer.",
    icon: (
      <img
        src="/img/docs/rust.webp"
        alt="Documentación de Rust para Internet Computer"
        className="w-10 h-10"
        loading="lazy"
      />
    ),
    invertIconDarkMode: true,
    action: (
      <Link
        href="/docs/building-apps/developer-tools/cdks/rust/intro-to-rust"
        className="button button-ghost rounded-2xl md:w-20 button-with-icon"
        title="Ir a la documentación de Rust"
      >
        <span className={"md:hidden"}>Ir a la documentación de Rust</span>
        <LinkArrowRight />
      </Link>
    ),
  },
  {
    label: "Typescript",
    description:
      "Programa en el lenguaje de la web, TypeScript y JavaScript, usando Azle.",
    icon: (
      <img
        src="/img/docs/typescript.webp"
        alt="Documentación de TypeScript para Internet Computer"
        className="w-10 h-10"
        loading="lazy"
      />
    ),
    action: (
      <Link
        href="https://demergent-labs.github.io/azle//"
        className="button button-ghost rounded-2xl md:w-20 button-with-icon"
        title="Ir a la documentación de TypeScript"
      >
        <span className={"md:hidden"}>Ir a la documentación de TypeScript</span>
        <LinkArrowRight />
      </Link>
    ),
  },
  {
    label: "Solidity",
    description:
      "Despliega contratos inteligentes de Solidity en Internet Computer con Bitfinity.",
    icon: (
      <img
        src="/img/docs/solidity.webp"
        alt="Documentación de Solidity para Internet Computer"
        className="w-10 h-10"
        loading="lazy"
      />
    ),
    action: (
      <Link
        href="https://docs.bitfinity.network/"
        className="button button-ghost rounded-2xl md:w-20 button-with-icon"
        title="Ir a la documentación de Solidity"
      >
        <span className={"md:hidden"}>Ir a la documentación de Solidity</span>
        <LinkArrowRight />
      </Link>
    ),
  },
];

const Tile = ({ tile }: { tile: TileDescriptor }) => {
  return (
    <div
      className={`tile flex flex-col ${"bg-white/70 border-white"} rounded-lg border border-solid p-4 justify-between`}
    >
      <div className={"flex flex-col gap-4 items-start"}>
        <div className={"flex flex-row gap-4 items-center"}>
          <i
            className={`tile__icon ${
              tile?.invertIconDarkMode ? "tile__icon--invert" : ""
            }`}
          >
            {tile.icon}
          </i>
          <span className={"tw-heading-5 whitespace-pre-wrap"}>
            {tile.label}
          </span>
        </div>
        <p>{tile.description}</p>
      </div>
      {tile.action}
    </div>
  );
};

const chainfusionTiles: TileDescriptor[] = [
  {
    label: "Blockchains soportadas",
    description: "Descubre con qué cadenas se integra ICP y cómo lo hace.",
    icon: (
      <img
        src="/img/dfinity_logo.svg"
        alt="Blockchains soportadas"
        className="w-10 h-10"
        loading="lazy"
      />
    ),
    action: (
      <Link
        href="/docs/building-apps/chain-fusion/supported-chains"
        className="button button-ghost rounded-2xl md:w-20 button-with-icon"
        title="Ver la documentación"
      >
        <span className={"md:hidden"}>Ver la documentación</span>
        <LinkArrowRight />
      </Link>
    ),
  },
  {
    label: "Bitcoin",
    description: (
      <span>
        ICP tiene una integración directa con la red de Bitcoin mediante un
        adaptador de Bitcoin y firmas umbral como t-ECDSA y t-Schnorr. Aprende
        cómo tu canister puede firmar y enviar transacciones para BRC-20,
        Ordinals, Runes y más.
      </span>
    ),
    icon: (
      <img
        src="/img/chainfusion/ck_Tokens.png"
        alt="Integración de Bitcoin"
        className="w-10 h-10"
        loading="lazy"
      />
    ),
    action: (
      <Link
        href="/docs/building-apps/chain-fusion/bitcoin/overview"
        className="button button-ghost rounded-2xl md:w-20 button-with-icon"
        title="Aprende más acerca de la integración de Bitcoin"
      >
        <span className={"md:hidden"}>
          Aprende más acerca de la integración de Bitcoin
        </span>
        <LinkArrowRight />
      </Link>
    ),
  },
  {
    label: "Ethereum",
    description:
      "Los canisters de ICP pueden firmar y enviar transacciones directamente a Ethereum y cadenas EVM a través del canister EVM RPC. Aprende más sobre cómo puedes desarrollar aplicaciones de Ethereum en ICP.",
    icon: (
      <img
        src="/img/chainfusion/ck_Tokens-3.png"
        alt="Integración de Ethereum"
        className="w-10 h-10"
        loading="lazy"
      />
    ),
    action: (
      <Link
        href="/docs/building-apps/chain-fusion/ethereum/overview"
        className="button button-ghost rounded-2xl md:w-20 button-with-icon"
        title="Aprende más acerca de la integración de Ethereum"
      >
        <span className={"md:hidden"}>
          Aprende más acerca de la integración de Ethereum
        </span>
        <LinkArrowRight />
      </Link>
    ),
  },
  {
    label: "Chain-key tokens",
    description: (
      <span>
        Los tokens Chain-Key son gemelos digitales de Bitcoin, Ethereum y tokens
        ERC-20, asegurados en ICP mediante criptografía Chain-Key.
      </span>
    ),
    icon: (
      <img
        src="/img/chainfusion/ck_Tokens-2.png"
        alt="Integración de chain-key tokens"
        className="w-10 h-10"
        loading="lazy"
      />
    ),
    action: (
      <Link
        href="/docs/defi/chain-key-tokens/overview"
        className="button button-ghost rounded-2xl md:w-20 button-with-icon"
        title="Aprende más acerca de los chain-key tokens"
      >
        <span className={"md:hidden"}>
          Aprende más acerca de los chain-key tokens
        </span>
        <LinkArrowRight />
      </Link>
    ),
  },
];

const Education = () => {
  const CARDS: Array<CarouselCard> = [
    {
      title: (
        <h2 className={"text-white"}>
          Inicia tu despegue como desarrollador con Jessie
        </h2>
      ),
      subtitle: (
        <p className={"text-white"}>
          Avanza hasta convertirte en un astronauta de ICP con esta serie de
          videos de 5 niveles
        </p>
      ),
      backgroundImage: "/img/docs/teaser-cards/bg-1.svg",
      cta: (
        <Link
          className="button-transparent button-with-icon pl-0"
          href="/docs/tutorials/developer-liftoff/"
        >
          Comenzar tutoriales
          <LinkArrowRight />
        </Link>
      ),
      mainImage: "/img/docs/teaser-cards/developerLadder.svg",
    },
    {
      title: <h2 className={"text-white"}>Hackathon Prep Course</h2>,
      subtitle: (
        <p className={"text-white"}>
          Inicia tu proyecto de Hackathon aprendiendo lo esencial de ICP
        </p>
      ),
      backgroundImage: "/img/docs/teaser-cards/bg-0.svg",
      cta: (
        <Link
          className="button-transparent button-with-icon pl-0"
          href="/docs/tutorials/hackathon-prep-course/"
        >
          Comenzar curso
          <LinkArrowRight />
        </Link>
      ),
      mainImage: "/img/docs/teaser-cards/hackathon-prep-course.svg",
    },
    {
      title: (
        <h2 className={"text-white"}>ICP Desmitificado: Aprende lo Esencial</h2>
      ),
      subtitle: (
        <p className={"text-white"}>
          Explora el protocolo y sus características con nuestra serie de
          educación “De Cero a dApp”.
        </p>
      ),
      backgroundImage: "/img/docs/teaser-cards/zero-dapp.webp",
      cta: (
        <Link
          className="button-transparent button-with-icon pl-0"
          href="https://www.youtube.com/playlist?list=PLuhDt1vhGcrcRcHvSKmxIgJAh1b3rcR7N&si=sIElj5bAkJeMqDoA"
        >
          Mirar ahora
          <LinkArrowUpRight />
        </Link>
      ),
      mainImage: "/img/docs/teaser-cards/main-zero-to-dapp.webp",
    },
  ];
  return (
    <div
      className={
        "grid grid-cols-1 md:grid-cols-3 grid-rows-2 md:grid-rows-1 gap-3"
      }
    >
      {CARDS.map((card, index) => {
        const backgroundStyles = card.backgroundImage
          ? {
              backgroundImage: `url(${card.backgroundImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }
          : {};
        return (
          <TeaserCard
            key={index}
            card={card}
            style={backgroundStyles}
            className={"h-full p-8 rounded-lg"}
          />
        );
      })}
    </div>
  );
};

function TeaserCardFooter({
  card,
  className,
}: {
  card: CarouselCard;
  className?: string;
}) {
  const backgroundStyles = card.backgroundImage
    ? {
        backgroundImage: `url(${card.backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }
    : {};
  return (
    <div
      className={className}
      style={{
        ...backgroundStyles,
      }}
    >
      <div className={"p-6 flex flex-col justify-between "}>
        <div className={"flex flex-col"}>
          {card.title}
          {card.subtitle}
          {card.cta}
        </div>
        {card.mainImage && (
          <img
            loading="lazy"
            className={"sm:hidden"}
            src={card.mainImage}
            alt={typeof card.title === "string" ? card.title : "Card image"}
          />
        )}
      </div>
      {card.mainImage && (
        <div className={"justify-center hidden sm:flex"}>
          <img
            className={"mt-auto"}
            src={card.mainImage}
            alt={typeof card.title === "string" ? card.title : "Card image"}
          />
        </div>
      )}
    </div>
  );
}

const footerCards: Array<CarouselCard> = [
  {
    title: (
      <h2 className={"text-white"}>
        Sigue a @DFINITYDev en X para noticias tecnológicas
      </h2>
    ),
    subtitle: (
      <p className={"text-white"}>
        Todos los desarrolladores, geeks y fanáticos de la tecnología son
        bienvenidos
      </p>
    ),
    backgroundImage: "/img/docs/teaser-cards/bg-0.svg",
    cta: (
      <Link
        className="button-transparent button-with-icon pl-0"
        href="https://twitter.com/DFINITYDev"
      >
        Seguir ahora
        <LinkArrowRight />
      </Link>
    ),
    mainImage: "/img/docs/teaser-cards/main-0.svg",
  },
  {
    title: (
      <h2 className={"text-white"}>
        Office hours para desarrolladores en Discord.
      </h2>
    ),
    subtitle: (
      <p className={"text-white"}>
        Todos los miércoles a las 9:00 AM CEST y 10:30 AM PST.
      </p>
    ),
    backgroundImage: "/img/docs/teaser-cards/bg-2.svg",
    cta: (
      <Link
        className="button-transparent button-with-icon pl-0"
        href="https://discord.internetcomputer.org"
      >
        Unirse a Discord
        <LinkArrowRight />
      </Link>
    ),
    mainImage: "/img/docs/teaser-cards/main-2.svg",
  },
];

const DocsHomePage: FC = () => {
  return (
    <div className="flex flex-col gap-10 docshome">
      <section className="flex flex-col gap-8">
        <div className="px-8 py-10 md:p-10 rounded-lg bg-infinite text-white sm:col-span-2 md:row-span-2 bg-center bg-cover flex flex-col relative overflow-hidden">
          <div className="blob blob-md md:blob-lg blob-white md:blob-white-dense -translate-y-[10%] z-0 md:opacity-30 " />

          <h1 className="tw-heading-3 sm:tw-heading-60 md:tw-heading-2 mb-14">
            Inicio rápido
          </h1>

          <div className={"flex flex-row gap-2 flex-wrap items-end"}>
            <p className="mb-0">
              <Link
                className="button-white button-with-icon"
                href="https://icp.ninja/"
              >
                WEB IDE
                <LinkArrowRight />
              </Link>
            </p>
            <p className="mb-0">
              <Link
                className="button-white button-with-icon"
                href="/docs/building-apps/getting-started/quickstart"
              >
                SDK
                <LinkArrowRight />
              </Link>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr,1fr] gap-8 mt-12 tw-lead">
            <div className="mb-auto">
              Conviértete en un desarrollador de "World Computer" que construye
              redes sociales soberanas, juegos, aplicaciones empresariales, IA,
              Web3, DeFi y _
            </div>
            <div className="mb-auto tw-paragraph text-white-80 flex flex-col gap-2">
              Internet Computer (ICP) proporciona una plataforma 100%
              descentralizada donde los desarrolladores pueden construir sin Big
              Tech y IT tradicional.
            </div>
            <div className="mb-auto tw-paragraph text-white-80 flex flex-col gap-2">
              La descentralización de extremo a extremo hace que los servicios
              sean inmunes a los ciberataques, imparables, resistentes a la
              censura y, opcionalmente, tokenizados y autónomos.
            </div>
          </div>
        </div>
        <div className="px-6 py-0 md:p-10 border md:mx-auto md:min-w-[900px] sm:col-span-2 relative z-2 md:-mt-10">
          <QueryClientProvider client={queryClient}>
            <NetworkStats></NetworkStats>
          </QueryClientProvider>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[2fr,4fr] gap-24 relative z-2">
          <div>
            <h2 className="tw-heading-4 md:tw-heading-3">Lenguajes</h2>
            <p className="tw-paragraph">
              Principiante o experto, nuestras guías completas, tutoriales,
              ejemplos y documentación de API te tienen cubierto.
            </p>
            <Link
              className="button-primary rounded-2xl"
              href="/docs/building-apps/developer-tools/cdks/"
            >
              Ver todo
            </Link>
          </div>
          <div>
            <div className="grid md:grid-cols-2 gap-4">
              {languagesTiles.map((tile, index) => (
                <Tile tile={tile} key={index} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div>
            <h2 className="tw-heading-4 md:tw-heading-3">Cursos</h2>
            <Education />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-[2fr,4fr] gap-24 mt-20">
        <div>
          <h2 className="tw-heading-4 md:tw-heading-3">Chain Fusion</h2>
          <p className="tw-paragraph">
            Desarrolla aplicaciones cross-chain utilizando la integración
            directa de ICP con otras blockchains.
          </p>
          <Link
            className="button-primary rounded-2xl"
            href="/docs/building-apps/chain-fusion/overview"
          >
            APRENDER MÁS
          </Link>
        </div>
        <div>
          <div className="grid md:grid-cols-2 gap-4">
            {chainfusionTiles.map((tile, index) => (
              <Tile tile={tile} key={index} />
            ))}
          </div>
        </div>
      </div>

      <section>
        <Blog />
      </section>
      <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr] gap-4 ">
        {footerCards.map((card, index) => (
          <TeaserCardFooter card={card} key={index} className="rounded-lg" />
        ))}
      </div>
      <section className="bg-infinite">
        <section className="bg-infinite -mx-4 px-4 sm:-mx-8 sm:px-8 md:mx-[-50px] md:px-[50px] text-white py-10 md:pt-14 md:pb-20">
          <div className=" bg-gradient-to-r from-[#6A85F199] to-[#C572EF99] rounded-lg px-6 py-8 md:p-8 flex flex-col md:flex-row gap-20">
            <div className="md:flex-[4] md:flex md:flex-col items-start">
              <div className="tw-heading-6 mb-10">
                Contribuir con
                <br />
                Internet Computer
              </div>
              <h2 className="tw-heading-3 mb-4 sm:w-5/10 md:w-8/10">
                Ayúdanos a mejorar la documentación
              </h2>
              <p className="tw-paragraph mb-10 sm:w-6/10 md:w-8/10 md:flex-1">
                Esta documentación es un esfuerzo de la comunidad. Crea un PR si
                ves errores, oportunidades de mejora o nuevas formas de ayudar a
                los desarrolladores de IC.
              </p>
              <Link
                href="https://github.com/dfinity/portal"
                target="_blank"
                rel="noopener noreferrer"
                className="button-outline-white"
              >
                Contribuir
              </Link>
            </div>
            <div className="flex flex-col gap-2 md:flex-[5]">
              {links.map(({ label, href }) => (
                <Link
                  className="px-8 py-6 bg-infinite/60 text-white tw-heading-6 flex justify-between items-center gap-4 border border-solid border-[#672AE999] rounded-lg hover:opacity-80 hover:text-white hover:no-underline"
                  href={href}
                  key={label}
                >
                  {label}
                  <LinkArrowRight />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default DocsHomePage;