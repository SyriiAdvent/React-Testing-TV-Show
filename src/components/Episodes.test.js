import React from "react";
import { render, waitFor } from "@testing-library/react";
import Episodes from "./Episodes";

test("Episodes Mounts", async () => {
  render(<Episodes episodes={[]} />);
});

// test('Episodes Mounts and renders error', () => {

// })