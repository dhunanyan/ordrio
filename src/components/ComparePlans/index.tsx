"use client";
import * as React from "react";
import { motion } from "framer-motion";

import { Icons } from "@config";

export type ComparePlansPropsType = {
  header: string[];
  pricing: string[];
  content: { text: string; checks: boolean[]; count?: string[] }[];
};

import "./ComparePlans.scss";

export const ComparePlans = ({
  header,
  pricing,
  content,
}: ComparePlansPropsType) => (
  <div className="compare-plans">
    <div className="compare-plans__container">
      <header className="compare-plans__header">
        <div className="compare-plans__header-row">
          {header.map((item, i) => (
            <span key={i} className="compare-plans__header-row-item">
              {item}
            </span>
          ))}
        </div>
      </header>
      <ul className="compare-plans__rows">
        <li className="compare-plans__row">
          {pricing.map((item, i) => (
            <span
              key={i}
              className="compare-plans__row-item compare-plans__row-item--pricing"
            >
              {item}
            </span>
          ))}
        </li>

        {content.map(({ text, checks, count }, i) => (
          <li key={i} className="compare-plans__row">
            <span className="compare-plans__row-item compare-plans__row-item--pricing">
              {text}
            </span>

            {checks.map((check, j) => (
              <motion.span
                key={j}
                className={
                  "compare-plans__row-item compare-plans__row-item--pricing" +
                  (check
                    ? count
                      ? ""
                      : " compare-plans__row-item--icon"
                    : " compare-plans__row-item--empty")
                }
                dangerouslySetInnerHTML={{
                  __html: `${check ? (count ? count[j] : Icons["check"]) : "—"}`,
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * j }}
                viewport={{ once: true }}
              />
            ))}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
