import SampleContainer from '../views/SampleContainer/SampleContainer';

const appRoutes = [
  { path: '/sample', component: SampleContainer },
  { redirect: true, path: '/', to: '/sample', navbarName: 'Redirect' },
];

export default appRoutes;
