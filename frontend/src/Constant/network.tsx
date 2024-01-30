import axios from 'axios';
import { Observable } from 'rxjs';
import { authContext } from '../components/chatComponents/customHeader/customHeader';
import { UrlList } from './urlList';
// import { authContext } from '../App';
import { selectedLanguage } from '../multiLanguage/language';
import { historyObj, chatClient } from '../pages/chat/chat';

/**
 * Fetching refresh token
 * 
 * @param {any} parms 
 * @returns 
 */
const getRefeshToken = async (parms) => {
    const userInfo = JSON.parse(await localStorage.getItem('chatData') || '{}');
    const { ReferehToken, AppToken } = userInfo;
    return parms === 'AppToken' ? AppToken : ReferehToken;
}

/**
 * Http post request
 * 
 * @param {string} url 
 * @param {{}} params 
 * @param {{}} [headers] 
 * @returns 
 */
const post = (url: string, paramsObj: {}, headers?: {}) => {
    try {

        return new Observable((observer: any) => {
            const params = {...paramsObj};
            // params['AppCode'] = '1';
            // params['SelectedLanguage'] = selectedLanguage.toLowerCase();
            axios.post(url, params, headers)
                .then((response) => {
                    observer.next(response);
                    observer.complete();
                })
                .catch((error) => {
                    if (error && error.response && error.response.status === 401) {
                        refreshToken('post', url, params).subscribe(
                            res => {
                                observer.next(res);
                                observer.complete();
                            }, err => {
                                observer.error(err);
                                observer.complete();
                            }
                        )
                    } else {
                        observer.error(error);
                        observer.complete();
                    }
                }
                )
        })
    } catch (err) {
        // console.log('catch err', err)
    }
};

/**
 * Http put request
 * 
 * @param {string} url 
 * @param {{}} params 
 * @param {{}} [headers] 
 * @returns 
 */
const put = (url: string, paramsObj: {}, headers?: {}) => {
    try {
        return new Observable((observer: any) => {
            const params = {...paramsObj};
            params['AppCode'] = '1';
            params['SelectedLanguage'] = selectedLanguage.toLowerCase();
            axios.put(url, params, headers)
                .then((response) => {
                    observer.next(response);
                    observer.complete();
                })
                .catch((error) => {
                    if (error && error.response && error.response.status === 401) {
                        refreshToken('put', url, params).subscribe(
                            res => {
                                observer.next(res);
                                observer.complete();
                            }, err => {
                                observer.error(err);
                                observer.complete();
                            }
                        )
                    } else {
                        observer.error(error);
                        observer.complete();
                    }
                }
                )
        });
    } catch (err) {
        // console.log('catch err', err)
    }
}

/**
 * Http get request
 * 
 * @param {string} url 
 * @param {{}} params 
 * @param {{}} [headers] 
 * @param {*} [cancelToken] 
 * @returns 
 */
const get = (url: string, paramsObj: {}, headers?: {}, cancelToken?: any) => {
    try {
        return new Observable((observer: any) => {
            const params = {...paramsObj};

            params['AppCode'] = '1';
            params['SelectedLanguage'] = selectedLanguage.toLowerCase();
            const _params = cancelToken ? { params: params, headers, cancelToken: cancelToken } : { params: params, headers};
            axios.get(url, _params,)
                .then((response) => {
                    observer.next(response);
                    observer.complete();
                })
                .catch((error) => {
                    if (error && error.response && error.response.status === 401) {
                        refreshToken('get', url, params).subscribe(
                            res => {
                                observer.next(res);
                                observer.complete();
                            }, err => {
                                observer.error(err);
                                observer.complete();
                            }
                        )
                    } else {
                        observer.error(error);
                        observer.complete();
                    }
                }
                )
        });
    } catch (err) {
        // console.log('catch err', err)
    }
}
/**
 * Check whether session is alive or not
 * 
 * @param {string} url 
 * @param {{}} params 
 * @param {{}} [headers] 
 * @param {*} [cancelToken] 
 * @returns 
 */
const getisalive = (url: string, paramsObj: {}, headers?: {}, cancelToken?: any) => {
    try {

        return new Observable((observer: any) => {
            const params = {...paramsObj};
            params['AppCode'] = '1';
            params['SelectedLanguage'] = selectedLanguage.toLowerCase();
            const _params = cancelToken ? { params: params, headers, cancelToken: cancelToken } : { params: params, headers};
            
            axios.get(url, _params,)
                .then((response) => {
                    // console.log("getisalive",response)
                    observer.next(response);
                    observer.complete();
                })
                .catch((error) => {
                    // console.log("error getisalive",error)
                    if (error && error.response && error.response.status === 401) {
                        refreshTokenisalive('get', url, params).subscribe(
                            res => {
                                observer.next(res);
                                observer.complete();
                            }, err => {
                                observer.error(err);
                                observer.complete();
                            }
                        )
                    } else {
                        observer.error(error);
                        observer.complete();
                    }
                }
                )
        });
    } catch (err) {
        // console.log('catch err', err)
    }
}
/**
 * Http delete request
 * 
 * @param {string} url 
 * @param {{}} params 
 * @param {{}} [headers] 
 * @returns 
 */
const deleteApi = (url: string, paramsObj: {}, headers?: {}) => {
    try {
        return new Observable((observer: any) => {
            const params = {...paramsObj};
            params['AppCode'] = '1';
            params['SelectedLanguage'] = selectedLanguage.toLowerCase();
            axios.delete(url, { params, headers })
                .then((response: any) => {
                    observer.next(response);
                    observer.complete();
                }).catch((error) => {
                    if (error && error.response && error.response.status === 401) {
                        refreshToken('delete', url, params).subscribe(
                            res => {
                                observer.next(res);
                                observer.complete();
                            }, err => {
                                observer.error(err);
                                observer.complete();
                            }
                        )
                    } else {
                        observer.error(error);
                        observer.complete();
                    }
                }
                )
        });
    } catch (err) {
        // console.log('catch err', err)
    }
}
/**
 * Check refresh token is valid or not
 * 
 * @param {any} requestType 
 * @param {any} requestUrl 
 * @param {any} headers 
 * @returns 
 */
const refreshTokenisalive = (requestType, requestUrl, headers) => {
    let AppToken;
    try {
        const url = process.env.REACT_APP_API_END_POINT + UrlList.refreshToken;
        let ReferehToken;
        return new Observable((observer: any) => {
            getRefeshToken('ReferehToken').then((res) => {
                ReferehToken = res;
            }).then(() => {
                axios.post(url, '', {
                    headers: {
                        Authorization: ReferehToken
                    }
                })
                    .then((response) => {
                        // console.log("refresh toen api",response)
                        localStorage.setItem('chatData', JSON.stringify(response.data));
                        // Set login time
                        const loginTime = new Date().valueOf();
                        localStorage.setItem('loginTime', JSON.stringify(loginTime))
                        const params = {
                            'ApiKey': process.env.REACT_APP_API_KEY,
                            'SecreteKey': process.env.REACT_APP_SECRET_KEY,
                            'Authorization': 'Bearer ' + response.data.AppToken,
                            'content-type': 'application/json;charset=UTF-8'
                          }
                        //   console.log("refresh token api headers",headers)
                                getisalive(requestUrl,'',params).subscribe(
                                    res => {
                                        // console.log('refresh token',res)
                                        observer.next(res);
                                        observer.complete();
                                    }, err => {
                                        // console.log('refresh token err',err)
                                        err && err.response ? observer.error(err.response) : observer.error(err);
                                        observer.complete();
                                    }
                                );
                               
                            
                            
                        
                    })
                    .catch((error) => {
          
                        observer.error("refresh token error",error);
                        observer.complete();
                        logout();
                    });
            })
        })
    } catch (err) {
        // console.log('catch error')
    }
}

/**
 * Get refresh token
 * 
 * @param {any} requestType 
 * @param {any} requestUrl 
 * @param {any} params 
 * @returns 
 */
const refreshToken = (requestType, requestUrl, paramsObj) => {
    let AppToken;
    try {
        const params = {...paramsObj};
        params['AppCode'] = '1';
        params['SelectedLanguage'] = selectedLanguage.toLowerCase();
        const url = process.env.REACT_APP_API_END_POINT + UrlList.refreshToken;
        let ReferehToken;
        return new Observable((observer: any) => {
            getRefeshToken('ReferehToken').then((res) => {
                ReferehToken = res;
            }).then(() => {
                axios.post(url, '', {
                    headers: {
                        Authorization: ReferehToken
                    }
                })
                    .then((response) => {
                        localStorage.setItem('chatData', JSON.stringify(response.data));
                        // Set login time
                        const loginTime = new Date().valueOf();
                        localStorage.setItem('loginTime', JSON.stringify(loginTime))
                        const headers = {
                            'Authorization': 'Bearer ' + response.data.AppToken,
                            'content-type': 'application/json;charset=UTF-8'
                          }
                        switch (requestType) {
                            case 'get':
                                get(requestUrl, params,headers).subscribe(
                                    res => {
                                        observer.next(res);
                                        observer.complete();
                                    }, err => {
                                        err && err.response ? observer.error(err.response) : observer.error(err);
                                        observer.complete();
                                    }
                                );
                                break;
                                
                            case 'post':
                            
                                post(requestUrl, params,{ headers: headers }).subscribe(
                                    res => {
                                        observer.next(res);
                                        observer.complete();
                                    }, err => {
                                        err && err.response ? observer.error(err.response) : observer.error(err);
                                        observer.complete();
                                    }
                                );
                                break;
                            case 'put':
                                put(requestUrl, params,{ headers: headers }).subscribe(
                                    res => {
                                        observer.next(res);
                                        observer.complete();
                                    }, err => {
                                        err && err.response ? observer.error(err.response) : observer.error(err);
                                        observer.complete();
                                    }
                                );
                                break;
                            case 'delete':
                                deleteApi(requestUrl,{ params, headers }).subscribe(
                                    res => {
                                        observer.next(res);
                                        observer.complete();
                                    }, err => {
                                        err && err.response ? observer.error(err.response) : observer.error(err);
                                        observer.complete();
                                    }
                                );
                                break;
                        }
                    })
                    .catch((error) => {
          
                        observer.error(error);
                        observer.complete();
                        logout();
                    });
            })
        })
    } catch (err) {
        // console.log('catch error')
    }
}

/**
 * User logout
 * 
 */
const logout = () => {

    console.log('historyObj', historyObj);

    // historyObj.push('/');
   
    // const { signOut } = authContext;
    // console.log('authContext',authContext)
    // signOut();
    // localStorage.clear();
    localStorage.removeItem('chatData');
    // redirect to login page
    chatClient.disconnect();
    // this.props.history.push('/');
    historyObj.push('/');
}


export const API = {
    post,
    get,
    put,
    deleteApi,
    getisalive
};
