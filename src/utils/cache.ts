class LocalCache {
  //保存
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  // 获取
  getCache(key: string) {
    const value = window.localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }

  // 删除
  deleteCache(key: string) {
    window.localStorage.removeItem(key);
  }
}

export default new LocalCache();
