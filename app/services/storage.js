export const getStorageItem = item => JSON.parse(localStorage.getItem(item)) || [];

export const setStorageItem = (item, value) => localStorage.setItem(item, JSON.stringify(value));
