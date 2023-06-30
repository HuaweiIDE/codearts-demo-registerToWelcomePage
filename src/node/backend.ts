/********************************************************************************
 * Copyright (C) 2023 huaweicloud All rights reserved.
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

import * as codearts from '@codearts/plugin';
import { exposable, expose } from '@cloudide/messaging';
import { AbstractBackend } from '@codearts/core/lib/node/plugin-api';

@exposable
export class Backend extends AbstractBackend {
    private dispose!: codearts.Disposable;

    async init(): Promise<void> {

        // @ts-ignore
        codearts.window.registerToWelcomePage('class Welcome Page', 'cpp-build-tool.new-source-file', 'c');

        this.register();

        // @ts-ignore
        codearts.window.registerToWelcomePage('Java Welcome Page', 'workbench.action.openProjectWizard', 'java', 2);

        // @ts-ignore
        codearts.window.registerToWelcomePage('c Welcome Page', 'cpp-build-tool.new-class', 'c');
    }

    public async run(): Promise<void> {

    }

    public stop(): void {

    }

    @expose('dispose')
    public doSomething() {
        codearts.window.showInformationMessage('dispose')
        this.dispose.dispose();
    }

    @expose('register')
    public register() {
        // @ts-ignore
        this.dispose = codearts.window.registerToWelcomePage('C/C++ Welcome Page', 'cpp.project.wizard.welcome', 'cpp', 5);
    }

}
