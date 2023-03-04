/** @odoo-module **/

import { mount } from "@odoo/owl";
import { UIPlaygroundView } from "./ui_playground_view";
import { makeEnv, startServices } from "@web/env";
import { registry } from "@web/core/registry";
import {
    fakeCompanyService,
    makeFakeLocalizationService,
} from "@web/../tests/helpers/mock_services";

// The following code ensures that owl mount the component when ready.
// `templates` contains templates contained in the bundles.
//
// In the mount options, it's also possible to add other interresting
// configuration: https://github.com/odoo/owl/blob/master/doc/reference/app.md#configuration
import { templates } from "@web/core/assets";

const serviceRegistry = registry.category("services");

owl.whenReady(async () => {
    const env = makeEnv();

    serviceRegistry.add("localization", makeFakeLocalizationService(), { force: true });
    serviceRegistry.add("company", fakeCompanyService, { force: true });
    serviceRegistry.add(
        "menu",
        {
            start() {
                return {};
            },
        },
        { force: true }
    );

    await startServices(env);

    // @ts-ignore
    owl.Component.env.session = {};
    // @ts-ignore
    mount(UIPlaygroundView, document.body, { templates, env });
});
