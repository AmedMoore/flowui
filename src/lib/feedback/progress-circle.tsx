import React from "react";
import styles from "./progress-circle.module.scss";

export type ProgressCircleProps = {
  value: number;
};

const circumference = 40 * 2 * Math.PI;

export default function ProgressCircle({ value }: ProgressCircleProps) {
  return (
    <div className={styles.progressCircleContainer}>
      <svg className="w-40 h-40">
        <circle
          className={styles.circleBorder}
          cx="80"
          cy="80"
          fill="transparent"
          r="40"
          stroke="currentColor"
          strokeWidth="6"
        />
        <circle
          className={styles.circle}
          cx="80"
          cy="80"
          fill="transparent"
          r="40"
          stroke="currentColor"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (value / 100) * circumference}
          strokeLinecap="round"
          strokeWidth="6"
        />
      </svg>
      <span className={styles.valueText}>{value}%</span>
    </div>
  );
}
