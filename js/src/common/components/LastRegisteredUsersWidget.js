/*
 * This file is part of Last registered Users extension.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import Widget from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';
import app from 'flarum/forum/app';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import { truncate } from 'flarum/common/utils/string';
import Separator from 'flarum/common/components/Separator';
import avatar from 'flarum/common/helpers/avatar';

export default class LastRegisteredUsersWidget extends Widget {
    oninit(vnode) {
        super.oninit(vnode);
        this.loading = true;
    }

    oncreate(vnode) {
        // settings to limit post number on frontend

        // get posts json
        const RecentUsers = app.store
            .find('users', {
                isEmailConfirmed: true,
                sort: '-joinedAt',
                page: { limit: 2 },
            })
            .then((results) => {
                this.lastRegisteredUsers = results;
                console.log(results);
                this.loading = false;
                m.redraw();
            });
    }

    className() {
        // css class for the container
        return 'lastRegUser-widget';
    }

    icon() {
        // Widget icon.
        return 'fas fa-calendar-day';
    }

  /*  title() {
        // Widget title.
        return app.translator.trans('justoverclock-last-registered-users.forum.widget-title');
    }*/

    content() {
        if (this.loading) {
            return <LoadingIndicator />;
        }
      const regTest = app.translator.trans('justoverclock-last-registered-users.forum.imageAlt') ;
      const ImgRegUser = app.forum.attribute('baseUrl') + '/assets/extensions/justoverclock-last-registered-users/newusers.png';
        return (
            <div className="last-registered-users">
              <div class="imageRegUsers"><img class="topImagewg" src={ImgRegUser} alt={regTest}></img></div>
                {
                    <ul className="lastreguser fa-ul">
                        {this.lastRegisteredUsers.map((user) => {
                            return (
                                <li class="lastreguswdg">

                                    <div class="lastregAvatar">{avatar(user)}</div>
                                    <a href={app.route.user(user)} class="lastreglink">
                                       <strong>{user.username()}</strong>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                }
            </div>
        );
    }
}
