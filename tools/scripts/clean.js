require('shelljs/global');
const addCheckMark = require('./helpers/checkmark.js');

if (!which('git')) {
  echo('Sorry, this script requires git');
  exit(1);
}

if (!test('-e', 'tools/templates')) {
  echo('The example is deleted already.');
  exit(1);
}

process.stdout.write('Cleanup started...');

// Reuse existing LanguageProvider and i18n tests
mv('app/containers/LanguageProvider/tests', 'tools/templates/containers/LanguageProvider');
cp('app/tests/i18n.test.js', 'tools/templates/tests/i18n.test.js');

// Cleanup components/
rm('-rf', 'app/components/*');

// Handle containers/
rm('-rf', 'app/containers');
mv('tools/templates/containers', 'app');

// Handle tests/
mv('tools/templates/tests', 'app');

// Handle translations/
rm('-rf', 'app/translations')
mv('tools/templates/translations', 'app');

// Handle utils/
rm('-rf', 'app/utils');
mv('tools/templates/utils', 'app')

// Replace the files in the root app/ folder
cp('tools/templates/app.js', 'app/app.js');
cp('tools/templates/global-styles.js', 'app/global-styles.js');
cp('tools/templates/i18n.js', 'app/i18n.js');
cp('tools/templates/index.html', 'app/index.html');
cp('tools/templates/reducers.js', 'app/reducers.js');
cp('tools/templates/routes.js', 'app/routes.js');
cp('tools/templates/store.js', 'app/store.js');

// Remove the templates folder
rm('-rf', 'tools/templates');

addCheckMark();

// Commit the changes
if (exec('git add . --all && git commit -qm "Remove default example"').code !== 0) {
  echo('\nError: Git commit failed');
  exit(1);
}

echo('\nCleanup done. Happy Coding!!!');
