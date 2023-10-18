const db = wx.cloud.database();

export const list = () => {
  return db.collection('banner_info').get();
}