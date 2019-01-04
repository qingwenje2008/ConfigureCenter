/**
 * @auth create by wangzhigang on 2018-07-11
 * @email 1161909281@qq.com
 */
export default app => ([
    {
      app,
      models: () => [
        import('../models/app.model')
      ],
      path: '/app',
      component: () => import('./application'),
    },
  ]);