import app from 'flarum/admin/app';
import registerWidget from '../common/registerWidget';

app.initializers.add('justoverclock/last-registered-users', () => {
    registerWidget(app);
});
