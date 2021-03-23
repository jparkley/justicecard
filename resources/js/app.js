/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers.
 */

require("./bootstrap")

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
// require('./components/Example');

import { InertiaApp } from "@inertiajs/inertia-react"
import React from "react"
import { render } from "react-dom"

const app = document.getElementById("app")

render(
  <InertiaApp
    initialPage={JSON.parse(app.dataset.page)}
    resolveComponent={(name) =>
      import(`./Pages/${name}`).then((module) => module.default)
    }
  />,
  app
)
