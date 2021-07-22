/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import path from 'path';
import fs from 'fs-extra';
import {
  getSourcePlugins,
  moveInstalledPluginsFromLegacyDir,
  InstalledPluginDetails,
  getAllInstalledPluginVersions,
  getAllInstalledPluginsInDir,
} from 'flipper-plugin-lib';
import {getStaticPath} from '../utils/pathUtils';

// Load "dynamic" plugins, e.g. those which are either pre-installed (default), installed or loaded from sources (for development).
// This opposed to "bundled" plugins which are included into Flipper bundle.
export default async function loadDynamicPlugins(): Promise<
  InstalledPluginDetails[]
> {
  if (process.env.FLIPPER_FAST_REFRESH) {
    console.log(
      '❌  Skipping loading of dynamic plugins because Fast Refresh is enabled. Fast Refresh only works with bundled plugins.',
    );
    return [];
  }
  await moveInstalledPluginsFromLegacyDir().catch((ex) =>
    console.error(
      'Eror while migrating installed plugins from legacy folder',
      ex,
    ),
  );
  const bundledPlugins = new Set<string>(
    (
      await fs.readJson(
        getStaticPath(path.join('defaultPlugins', 'bundled.json'), {
          asarUnpacked: true,
        }),
      )
    ).map((p: any) => p.name) as string[],
  );
  const [installedPlugins, unfilteredSourcePlugins] = await Promise.all([
    process.env.FLIPPER_NO_PLUGIN_MARKETPLACE
      ? Promise.resolve([])
      : getAllInstalledPluginVersions(),
    getSourcePlugins(),
  ]);
  const sourcePlugins = unfilteredSourcePlugins.filter(
    (p) => !bundledPlugins.has(p.name),
  );
  const defaultPluginsDir = getStaticPath('defaultPlugins', {
    asarUnpacked: true,
  });
  const defaultPlugins = await getAllInstalledPluginsInDir(defaultPluginsDir);
  if (defaultPlugins.length > 0) {
    console.log(
      `✅  Loaded ${defaultPlugins.length} default plugins: ${defaultPlugins
        .map((x) => x.title)
        .join(', ')}.`,
    );
  }
  if (installedPlugins.length > 0) {
    console.log(
      `✅  Loaded ${installedPlugins.length} installed plugins: ${Array.from(
        new Set(installedPlugins.map((x) => x.title)),
      ).join(', ')}.`,
    );
  }
  if (sourcePlugins.length > 0) {
    console.log(
      `✅  Loaded ${sourcePlugins.length} source plugins: ${sourcePlugins
        .map((x) => x.title)
        .join(', ')}.`,
    );
  }
  return [...defaultPlugins, ...installedPlugins, ...sourcePlugins];
}
