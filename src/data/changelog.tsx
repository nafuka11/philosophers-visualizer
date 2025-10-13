import { ReactNode } from "react";

export type ChangelogEntry = {
  version: string;
  date: string;
  changes: ReactNode[];
};

export const changelogEntries: ChangelogEntry[] = [
  {
    version: "1.0.0",
    date: "2025-10-13",
    changes: [
      <>
        Rebuilt the visualizer with React instead of Vue 2 so future updates are
        easier.
      </>,
      <>
        Please open an{" "}
        <a
          href="https://github.com/nafuka11/philosophers-visualizer/issues"
          target="_blank"
          rel="noopener noreferrer"
        >
          issue
        </a>{" "}
        if you encounter any problems.
      </>,
      <>
        The previous version is still available at{" "}
        <a
          href="https://nafuka11.github.io/philosophers-visualizer/v0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://nafuka11.github.io/philosophers-visualizer/v0/
        </a>
        .
      </>,
    ],
  },
  {
    version: "0.1.0",
    date: "2021-04-11",
    changes: [<>First public release of the Philosophers Visualizer.</>],
  },
];
