// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.

import { isWindows } from "../_util/os.ts";
import { posixBasename, windowsBasename } from "./_basename.ts";

/**
 * Return the last portion of a `path`.
 * Trailing directory separators are ignored, and optional suffix is removed.
 *
 * @param path - path to extract the name from.
 * @param [suffix] - suffix to remove from extracted name.
 */
export function basename(path: string, suffix = ""): string {
  return isWindows
    ? windowsBasename(path, suffix)
    : posixBasename(path, suffix);
}
