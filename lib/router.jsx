FlowRouter.route('/', {
  name: 'home',
  action: (params) => {
    renderMainLayoutWith(<JobsList />);
    setTitle('Jobs');
  }
});

FlowRouter.route('/jobs/add', {
  name: 'addJob',
  action: (params) => {
    renderMainLayoutWith(<AddJob />);
    setTitle('Add job');
  }
});

FlowRouter.route('/job/:slug/:_id', {
  name: 'showJob',
  action: (params) => {
    renderMainLayoutWith((<ShowJob />));
    var jobTitle = 'Job';
    Tracker.autorun(() => {
      if (Jobs.findOne()) {
        jobTitle = (Jobs.findOne().title);
      }
      setTitle(jobTitle);
    });
  }
});

FlowRouter.route('/jobs/:identifier/activate', {
  name: 'activateJob',
  action: (params) => {
    renderMainLayoutWith(<ActivateJob />);
    setTitle('Activating job');
  }
});

FlowRouter.route('/jobs/:identifier/remove', {
  name: 'removeJob',
  action: (params) => {
    renderMainLayoutWith(<RemoveJob />);
    setTitle('Removing job');
  }
});

FlowRouter.route('/jobs/:identifier/update', {
  name: 'updateJob',
  action: (params) => {
    renderMainLayoutWith(<UpdateJob />);
    setTitle('Update job');
  }
});

let renderMainLayoutWith = (component) => {
  ReactLayout.render(MainLayout, {
    component: component
  });
};

 Meteor.startup(function (){
  process.env.MAIL_URL = "smtp://postmaster@sandbox60823058f676472f8b693dc564f99c9c.mailgun.org:97148ad007cd9609e7436002e66ef347@smtp.mailgun.org:587";
});
