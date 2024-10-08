import { definePlugin } from 'sanity';

import FixReferenceAction from '../components/documentActions/FixReferenceAction';
import TranslateAction from '../components/documentActions/TranslateAction'; // Updated casing
import { TranslationPluginOptions } from '../types/TranslationPluginOptions';
import {
  DEFAULT_RESOURCE_BUNDLE_DE,
  DEFAULT_RESOURCE_BUNDLE_EN,
} from '../utils/i18n/resourceBundles';

export const TranslationPlugin = definePlugin<void | TranslationPluginOptions>(
  (config) => {
    const BASE_URL = config?.BASE_URL;
    return {
      name: `sanity-plugin-translate`,
      document: {
        actions: [
          (props) => TranslateAction({ ...props, BASE_URL }),
          (props) => FixReferenceAction({ ...props, BASE_URL }),
        ],
      },
      i18n: {
        bundles: [DEFAULT_RESOURCE_BUNDLE_EN, DEFAULT_RESOURCE_BUNDLE_DE],
      },
    };
  },
);
