/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { useStories } from "../stories";

export class StorybookSidebar extends Component {
  setup() {
    this.stories = useStories();
  }

  /**
   * Show/hide the folder
   * @param {Object} folder - An object with a "folded" boolean property.
   */
  toggleFold(folder) {
    folder.folded = !folder.folded;
  }

  /**
   * Executes when a story is clicked in the sidebar. Sends the information to the parent.
   * @param {Object} story - The story that has been clicked
   */
  onStoryClick(story) {
    this.stories.setActive(story);
  }
}

StorybookSidebar.template = "storybook.StorybookSidebar";
