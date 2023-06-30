/********************************************************************************
 * Copyright (C) 2023 huaweicloud All rights reserved.
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

import { PluginPage, AbstractFrontend } from '@codearts/core/lib/browser/plugin-api';
import { exposable } from '@cloudide/messaging';
import { Button } from '@cloud/ide-ui';

@exposable
class Frontend extends AbstractFrontend {

    async init(): Promise<void> {

    }

    run(): void {
        const button = new Button({ label: 'dispose' })
        button.onDidClick(() => {
            this.plugin.call('dispose');
        })

        const button1 = new Button({ label: 'register' });
        button1.onDidClick(() => {
            this.plugin.call('register');
        })

        document.querySelector('.plugin-body')?.append(button, button1);
    }

    stop(): void {

    }
}

document.addEventListener('DOMContentLoaded', function() {
    PluginPage.create([Frontend]);
});
