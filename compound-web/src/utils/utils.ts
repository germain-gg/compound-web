/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { split } from "lodash-es";

/**
 *
 * @param name
 */
export function nameToColor(name: string): string {
  // TODO: Those values should be taken from the design tokens
  const defaultColors = ['#0DBD8B', '#368bd6', '#ac3ba8'];
  let total = 0;
  for (let i = 0; i < name.length; ++i) {
      total += name.charCodeAt(i);
  }
  const colorIndex = total % defaultColors.length;
  return defaultColors[colorIndex];
}

/**
 * returns the first (non-sigil) character of 'name',
 * converted to uppercase
 * @param {string} name
 * @return {string} the first letter
 */
export function getInitialLetter(name: string): string {
  if (typeof name !== "string" || name === "") {
      // XXX: We should find out what causes the name to sometimes be falsy.
      console.trace("`name` argument to `getInitialLetter` not supplied");
      return undefined;
  }
  if (name.length < 1) {
      return undefined;
  }

  const initial = name[0];
  if ((initial === '@' || initial === '#' || initial === '+') && typeof name === "string" && name !== "") {
      name = name.substring(1);
  }

  // rely on the grapheme cluster splitter in lodash so that we don't break apart compound emojis
  return split(name, "", 1)[0].toUpperCase();
}
