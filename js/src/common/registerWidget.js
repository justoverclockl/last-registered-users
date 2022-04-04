import Widgets from 'flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets';
import LastRegisteredUsersWidget from './components/LastRegisteredUsersWidget';

export default function (app) {
    new Widgets()
        .add({
            key: 'LastRegistered',
            component: LastRegisteredUsersWidget,
            isUnique: true,
            placement: 'end',
            position: 1,
            isDisabled: () => {
                return !app.forum.attribute('canSearchUsers');
            },
        })
        .extend(app, 'justoverclock-last-registered-users');
}
