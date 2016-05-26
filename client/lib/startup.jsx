Meteor.startup(() => {
  NProgress.configure({
    showSpinner: false
  });

  Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
  });

  sAlert.config({
    effect: 'scale',
    position: 'left-bottom',
    timeout: 5000
  });
});
