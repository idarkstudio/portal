import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import Link from "@docusaurus/Link";
import RightArrowSVG from "@site/static/img/svgIcons/rightArrowIcon.svg";
import contribute from "@site/static/img/developers/contribute.webp";
import styles from "./index.module.css";
import transitions from "@site/static/transitions.json";
import { useInView } from "react-intersection-observer";

const cardsContent = [
  {
    title: "Grupos de trabajo técnicos",
    body: "Ayuda a dar forma al desarrollo de IC",
    link: "https://forum.dfinity.org/t/announcing-technical-working-groups/11781",
  },
  {
    title: "Únete al foro de desarrolladores",
    body: "Discute con la comunidad",
    link: "https://forum.dfinity.org/",
  },
  {
    title: "Office hours en Discord para desarrolladores",
    body: "Todos los miércoles a las 9am CET y 7pm CET",
    link: "https://discord.internetcomputer.org",
  },
  {
    title: "Subvenciones y recompensas para desarrolladores de DFINITY",
    body: "Inicia tu idea o recibe pago por construir en ICP",
    link: "https://dfinity.org/grants/",
  },
  {
    title: "Programa de recompensas por errores",
    body: "Informa posibles vulnerabilidades de seguridad y recibe recompensas",
    link: "https://dfinity.org/bug-bounty/",
  },
];

export function Card({ title, body }) {
  return (
    <>
      <div className={styles.cardContainer}>
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardBody}>{body}</p>
      </div>
      <RightArrowSVG className={styles.informationIcon} />
    </>
  );
}

function Index() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={transitions.container}
      className={styles.container}
    >
      <div id="features" />
      <motion.p variants={transitions.item} className={styles.title}>
        Contribuir con <br /> Internet Computer
      </motion.p>
      <motion.p variants={transitions.item} className={styles.subtitle}>
        Explora más a fondo los recursos adicionales del ecosistema de
        desarrolladores.
      </motion.p>
      <motion.div
        className={styles.scrollContainer}
        variants={transitions.item}
      >
        <div className={styles.mobileCardsContainer}>
          {cardsContent.map((card) => (
            <div className={styles.cardWrapper} key={card.title}>
              <a href={card.link} className={styles.card}>
                <Card key={card.title} title={card.title} body={card.body} />
              </a>
            </div>
          ))}
        </div>
      </motion.div>
      <div className={styles.cards}>
        {cardsContent.map((card) => (
          <motion.a
            variants={transitions.item}
            href={card.link}
            className={styles.card}
            key={card.title}
          >
            <Card title={card.title} body={card.body} />
          </motion.a>
        ))}
      </div>
      <div className={styles.contributionContainer}>
        <div className={styles.leftContainer}>
          <motion.p
            variants={transitions.item}
            className={styles.callToActionTitle}
          >
            Ayúdanos a mejorar la documentación.
          </motion.p>
          <motion.p
            variants={transitions.item}
            className={styles.callToActionText}
          >
            Esta documentación es un esfuerzo de la comunidad. Crea un PR si ves
            errores, oportunidades de mejora o nuevas formas de ayudar a los
            desarrolladores de IC.
          </motion.p>
          <motion.div
            variants={transitions.item}
            className={styles.actionContainer}
          >
            <Link
              className={styles.actionButton}
              to="https://github.com/dfinity/portal"
            >
              CONTRIBUIR
            </Link>
          </motion.div>
        </div>
        <motion.div
          variants={transitions.item}
          className={styles.rightContainer}
        >
          <img className={styles.contributeGraphic} src={contribute} alt="" />
        </motion.div>
      </div>
      <motion.div variants={transitions.item} className={styles.mobileGraphic}>
        <img
          className={styles.mobileContributeGraphic}
          src={contribute}
          alt="Contribuir"
        />
      </motion.div>
    </motion.div>
  );
}

export default Index;