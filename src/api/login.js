import service from '../http/http';

export const getLogin = info => service.post('/user/login', info);
