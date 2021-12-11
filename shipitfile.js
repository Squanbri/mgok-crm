/* eslint-disable @typescript-eslint/no-var-requires */

const shipitDeploy = require('shipit-deploy');
const utils = require('shipit-utils');

module.exports = function (shipit) {
  shipitDeploy(shipit);

  shipit.initConfig({
    default: {
      repositoryUrl: 'git@github.com:Squanbri/mgok-crm.git',
      ignores: [
        '.DS_Store',
        '.env',
        '.git',
        '.idea',
        '.vscode',
        'build',
        'node_modules',
      ],
      keepReleases: 5,
      deleteOnRollback: true,
      shallowClone: true,
    },
    production: {
      branch: "main",
      servers: 'www@el.mgok.moscow',
      deployTo: '/srv/www/el.mgok.moscow',
    },
  });

  shipit.blTask('deploy:dependencies', async () => {
    await shipit.remote(
      `cd ${shipit.releasePath} && yarn --frozen-lockfile --modules-folder ${shipit.config.deployTo}/shared/node_modules`,
    );
  });

  shipit.blTask('deploy:link', async () => {
    await shipit.remote(
      `ln -sf ${shipit.config.deployTo}/shared/node_modules ${shipit.releasePath}/`,
    );

    await shipit.remote(
      `ln -sf ${shipit.config.deployTo}/shared/.env ${shipit.releasePath}/.env`,
    );
  });

  shipit.blTask('deploy:build', async () => {
    await shipit.remote(`cd ${shipit.releasePath} && yarn build`);
  });

  utils.registerTask(shipit, 'deploy', [
    'deploy:init',
    'deploy:fetch',
    'deploy:update',
    'deploy:dependencies',
    'deploy:link',
    'deploy:build',
    'deploy:publish',
    'deploy:clean',
    'deploy:finish',
  ]);
};

// EXAMPLE:
// npx shipit staging deploy
