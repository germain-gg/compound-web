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

import { html } from "../../utils/html";

export default {
  title: 'Avatar',
};

const Template = (args) => html('cpd-avatar', args);

export const Round = Template.bind({});
Round.args = {
  src: 'http://placekitten.com/200/300',
  size: "50px",
  renderingType: "round",
  idName: "@bob:example.org",
  name: "👷‍♀️ Bob",
};

export const Square = Template.bind({});
Square.args = {
  src: 'http://placekitten.com/200/300',
  idName: "@bob:example.org",
  name: "👷‍♀️ Bob",
  renderingType: "square",
  size: "50px",
};

export const NoImage = Template.bind({});
NoImage.args = {
  size: "50px",
  idName: "@bob:example.org",
  name: "👷‍♀️ Bob"
};

export const VeryLargeNoImage = Template.bind({});
VeryLargeNoImage.args = {
  size: "300px",
  idName: "@bob:example.org",
  name: "👷‍♀️ Bob"
};




