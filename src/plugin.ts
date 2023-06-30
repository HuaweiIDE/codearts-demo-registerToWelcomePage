/********************************************************************************
 * Copyright (C) 2023 huaweicloud All rights reserved.
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

import * as codearts from '@codearts/plugin';
import { WebviewOptions } from '@codearts/core/lib/common/plugin-common';
import { Plugin } from '@codearts/core/lib/node/plugin-api';
import { Backend } from './node/backend';

export function start(context: codearts.ExtensionContext) {

    const opts: WebviewOptions = {
        viewType: 'view_type_of_your_plugin_view',
        title: 'registerToWelcomePage',
        targetArea: 'left',
        iconPath: 'resources/icons/plugin.svg',
        viewUrl: 'local:resources/page/index.ejs',
        preserveFocus: true,
        templateEngine: 'ejs'
    };

    const backends = [Backend];

    Plugin.create(context, opts, backends);
}

export function stop(context: codearts.ExtensionContext) {
    Plugin.getInstance().stop();
}
