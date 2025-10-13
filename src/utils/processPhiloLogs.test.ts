import { describe, expect, it } from "vitest";
import { processPhiloLogs } from "./processPhiloLogs";

describe("processPhiloLogs", () => {
  it("returns sorted actions and range for well-formed logs", () => {
    const logs = [
      "0 1 is thinking",
      "50 2 is eating",
      "100 1 is eating",
      "150 2 is sleeping",
      "200 3 is thinking",
    ];

    const result = processPhiloLogs(logs);

    expect(result.errors).toEqual([]);
    expect(result.range).toEqual({ min: 0, max: 200 });
    expect(result.actions).toEqual([
      {
        philoNum: 1,
        type: "think",
        startTime: 0,
        endTime: 100,
      },
      {
        philoNum: 1,
        type: "eat",
        startTime: 100,
        endTime: 200,
      },
      {
        philoNum: 2,
        type: "eat",
        startTime: 50,
        endTime: 150,
      },
      {
        philoNum: 2,
        type: "sleep",
        startTime: 150,
        endTime: 200,
      },
    ]);
  });

  it("ignores fork logs and reports invalid formats", () => {
    const logs = [
      "0 1 is thinking",
      "15 1 has taken a fork",
      "30 1 is eating",
      "invalid log entry",
    ];

    const result = processPhiloLogs(logs);

    expect(result.errors).toEqual(["Invalid log format: \"invalid log entry\""]);
    expect(result.range).toEqual({ min: 0, max: 30 });
    expect(result.actions).toEqual([
      {
        philoNum: 1,
        type: "think",
        startTime: 0,
        endTime: 30,
      },
    ]);
  });

  it("flags actions recorded after a philosopher has died", () => {
    const logs = [
      "0 1 is thinking",
      "50 1 died",
      "100 1 is eating",
    ];

    const result = processPhiloLogs(logs);

    expect(result.errors).toEqual([
      "Philosopher 1 is already dead (time: 50)",
    ]);
    expect(result.range).toEqual({ min: 0, max: 100 });
    expect(result.actions).toEqual([
      {
        philoNum: 1,
        type: "think",
        startTime: 0,
        endTime: 50,
      },
    ]);
  });
});
