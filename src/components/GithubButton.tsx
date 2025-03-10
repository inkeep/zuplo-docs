import React from "react";
import styles from "./GithubButton.module.css";
import { GitHubIcon } from "./ui-icons";

export default function GithubButton({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className={`clean-btn button button--primary ${styles["github-button"]}`}
    >
      {text} <GitHubIcon />
    </a>
  );
}
