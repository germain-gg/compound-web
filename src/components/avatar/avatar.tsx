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

import { Component, Prop, h } from '@stencil/core';

import { getInitialLetter, nameToColor } from "../../utils/utils";

@Component({
  tag: 'cpd-avatar',
  styleUrl: 'avatar.css',
  shadow: true,
})
export class Avatar {

  /**
   * The name (first initial used as default)
   */
  @Prop() name: string = "";

  /**
   * ID for generating hash colours
   */
  @Prop() idName?: string = "";

  /**
   * The avatar's source
   */
   @Prop() src?: string;

   /**
   * The avatar's size
   */
  @Prop() size: string;

  /**
   * The avatar's rendering type
   */
  @Prop() renderingType?: "round" | "square" = "round";

  render() {
      return (
        <div
          class="avatar"
          style={{
            "--color": nameToColor(this.idName),
            width: this.size,
            lineHeight: this.size,
            fontSize: `min(calc(${this.size} * 0.65), 60px)`
          }}
          data-type={this.renderingType}
          title={this.name}
        >
          { this.src !== undefined
            ? <img src={this.src} alt="" />
            : <span>{ getInitialLetter(this.name) }</span>
          }

        </div>
      );
  }
}
