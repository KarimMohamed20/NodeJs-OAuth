const GoogleStrategy = require('passport-google-oauth')
    .OAuth2Strategy;
    module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({
            clientID: '706267783118-a5ro7pfof6gdijj1keru9moq3jc3jf9t.apps.googleusercontent.com',
            clientSecret: 'B5RzjXMA1GIWCH8VlzbQlDjd',
            callbackURL: '/auth/google/callback'
        },
        (token, refreshToken, profile, done) => {
            return done(null, {
                profile: profile,
                token: token
            });
        }));
};