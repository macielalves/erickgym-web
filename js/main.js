import { getDataAPI, get_data_api } from "./api.js";



/**
 * Retorna os dados que foram requisitados a API;
 * @param url -> url do endpoint da api. Ex: https://example.com/api/dados;
 * @param callback -> Passe uma função callback. Ex: getData(url, function(data){// sua resolução aqui.})
 */
export const getData = getDataAPI;

export const get_data = get_data_api;

export function _get_data(url, callback) {
  get_data_api(url, callback);
}