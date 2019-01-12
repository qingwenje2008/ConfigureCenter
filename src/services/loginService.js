import Fetch from './http';
import { asyncHandler } from '../utils/httpUtil';
export default class LoginService extends Fetch {
  constructor() {
    super({
      basePath: 'http://localhost:8000',
      // headers: {
      //   'Accept': '*/*',
      //   'Content-Type': 'application/json'
      // }
    });
  }

  // 登录
  login(params) {
    return this.post('/api/login',params);
  }
}
