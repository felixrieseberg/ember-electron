function installExtensions() {
  try {
    window.requireNode('fs');
  } catch (e) {
    console.warn(
      'ember-electron is unable to require node modules, possibly because nodeIntegration is not enabled.'
    );
    console.warn(
      'This prevents the installation of the Ember Inspector and Devtron extensions. Error:'
    );
    console.warn(e);
    return;
  }

  /**
   * Install Devtron in the current window.
   */
  function installDevtron() {
    try {
      let devtron = window.requireNode('devtron');

      if (devtron) {
        devtron.install();
      }
    } catch (e) {
      console.error('Error installing devtron', e);
    }
  }

  installDevtron();
}

document.addEventListener('DOMContentLoaded', installExtensions);
