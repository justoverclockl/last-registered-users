/*
 * This file is part of Last registered Users extension.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/admin/app';
import registerWidget from '../common/registerWidget';

app.initializers.add('justoverclock/last-registered-users', () => {
    registerWidget(app);
    app.extensionData.for('justoverclock-last-registered-users').registerSetting({
        setting: 'justoverclock-last-registered-users.showLastUsers',
        name: 'justoverclock-last-registered-users.showLastUsers',
        type: 'number',
        label: app.translator.trans('justoverclock-last-registered-users.admin.showUsers'),
        help: app.translator.trans('justoverclock-last-registered-users.admin.showUsers-help'),
    });
});
