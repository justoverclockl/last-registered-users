import Widgets from 'flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets';
import LastRegisteredUsersWidget from './components/LastRegisteredUsersWidget';

export default function (app) {
    new Widgets()
        .add({
            key: 'LastRegistered',
            component: LastRegisteredUsersWidget,
            isDisabled: false,
            isUnique: true,
            placement: 'end',
            position: 1,
        })
        .extend(app, 'justoverclock-last-registered-users');
}
