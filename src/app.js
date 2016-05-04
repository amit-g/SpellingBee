export class App {
  configureRouter(config, router) {
    config.title = 'Spelling Bee';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: ['practice'], name: 'practice',      moduleId: 'practice',      nav: true, title: 'Practice' },
      //{ route: ['welcome1'], name: 'welcome1',      moduleId: 'welcome1',      nav: true, title: 'Welcome1' },
      //{ route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      //{ route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' },
      { route: 'setup',         name: 'setup',        moduleId: 'setup',        nav: true, title: 'Setup' }
    ]);

    this.router = router;
  }
}
