/* tslint:disable */
/* eslint-disable */
/**
 * evoWatch API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface AddUserDTO
 */
export interface AddUserDTO {
    /**
     * 
     * @type {string}
     * @memberof AddUserDTO
     */
    'normalName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddUserDTO
     */
    'email'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddUserDTO
     */
    'password'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddUserDTO
     */
    'nickname'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddUserDTO
     */
    'imageUrl'?: string | null;
}
/**
 * 
 * @export
 * @interface ModifyUserDTO
 */
export interface ModifyUserDTO {
    /**
     * 
     * @type {string}
     * @memberof ModifyUserDTO
     */
    'normalName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ModifyUserDTO
     */
    'email'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ModifyUserDTO
     */
    'isActive'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ModifyUserDTO
     */
    'nickname'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ModifyUserDTO
     */
    'imageUrl'?: string | null;
}
/**
 * 
 * @export
 * @interface ProblemDetails
 */
export interface ProblemDetails {
    [key: string]: any;

    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    'type'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    'title'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ProblemDetails
     */
    'status'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    'detail'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    'instance'?: string | null;
}

/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Registers user
         * @param {AddUserDTO} [addUserDTO] User to register
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addUser: async (addUserDTO?: AddUserDTO, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(addUserDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets user by Email
         * @param {string} email 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserByEmail: async (email: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'email' is not null or undefined
            assertParamExists('getUserByEmail', 'email', email)
            const localVarPath = `/users/{email}`
                .replace(`{${"email"}}`, encodeURIComponent(String(email)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets user by ID
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserById: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getUserById', 'id', id)
            const localVarPath = `/users/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary List all users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsers: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Modify user
         * @param {string} id 
         * @param {string} [password] 
         * @param {ModifyUserDTO} [modifyUserDTO] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        modifyUser: async (id: string, password?: string, modifyUserDTO?: ModifyUserDTO, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('modifyUser', 'id', id)
            const localVarPath = `/users/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            if (password != null) {
                localVarHeaderParameter['password'] = String(password);
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(modifyUserDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes user
         * @param {string} id 
         * @param {string} [password] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeUser: async (id: string, password?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('removeUser', 'id', id)
            const localVarPath = `/users/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            if (password != null) {
                localVarHeaderParameter['password'] = String(password);
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Registers user
         * @param {AddUserDTO} [addUserDTO] User to register
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addUser(addUserDTO?: AddUserDTO, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addUser(addUserDTO, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserApi.addUser']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Gets user by Email
         * @param {string} email 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserByEmail(email: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserByEmail(email, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserApi.getUserByEmail']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Gets user by ID
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserById(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserById(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserApi.getUserById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary List all users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUsers(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUsers(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserApi.getUsers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Modify user
         * @param {string} id 
         * @param {string} [password] 
         * @param {ModifyUserDTO} [modifyUserDTO] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async modifyUser(id: string, password?: string, modifyUserDTO?: ModifyUserDTO, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.modifyUser(id, password, modifyUserDTO, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserApi.modifyUser']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Deletes user
         * @param {string} id 
         * @param {string} [password] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeUser(id: string, password?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeUser(id, password, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserApi.removeUser']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserApiFp(configuration)
    return {
        /**
         * 
         * @summary Registers user
         * @param {AddUserDTO} [addUserDTO] User to register
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addUser(addUserDTO?: AddUserDTO, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.addUser(addUserDTO, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets user by Email
         * @param {string} email 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserByEmail(email: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.getUserByEmail(email, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets user by ID
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserById(id: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.getUserById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List all users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsers(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.getUsers(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Modify user
         * @param {string} id 
         * @param {string} [password] 
         * @param {ModifyUserDTO} [modifyUserDTO] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        modifyUser(id: string, password?: string, modifyUserDTO?: ModifyUserDTO, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.modifyUser(id, password, modifyUserDTO, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes user
         * @param {string} id 
         * @param {string} [password] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeUser(id: string, password?: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.removeUser(id, password, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
    /**
     * 
     * @summary Registers user
     * @param {AddUserDTO} [addUserDTO] User to register
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public addUser(addUserDTO?: AddUserDTO, options?: RawAxiosRequestConfig) {
        return UserApiFp(this.configuration).addUser(addUserDTO, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets user by Email
     * @param {string} email 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getUserByEmail(email: string, options?: RawAxiosRequestConfig) {
        return UserApiFp(this.configuration).getUserByEmail(email, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets user by ID
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getUserById(id: string, options?: RawAxiosRequestConfig) {
        return UserApiFp(this.configuration).getUserById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List all users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getUsers(options?: RawAxiosRequestConfig) {
        return UserApiFp(this.configuration).getUsers(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Modify user
     * @param {string} id 
     * @param {string} [password] 
     * @param {ModifyUserDTO} [modifyUserDTO] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public modifyUser(id: string, password?: string, modifyUserDTO?: ModifyUserDTO, options?: RawAxiosRequestConfig) {
        return UserApiFp(this.configuration).modifyUser(id, password, modifyUserDTO, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes user
     * @param {string} id 
     * @param {string} [password] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public removeUser(id: string, password?: string, options?: RawAxiosRequestConfig) {
        return UserApiFp(this.configuration).removeUser(id, password, options).then((request) => request(this.axios, this.basePath));
    }
}



