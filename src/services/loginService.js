import Fetch from './http';

export default class AreaService extends Fetch {
  constructor() {
    super({
    //   basePath: "/app_grimlock_manager",
      headers: {
        'Accept': '*/*',
        // 'Content-Type': 'multipart/form-data;'
      }
    });
  }

  // 登录
  login(params) {
    return this.post('/department/uploadExcel', params);
  }
}
