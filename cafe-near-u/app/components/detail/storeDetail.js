const storeDetail = {
  name: "抽抽藝術咖啡",
  type: "休閒/聚會/工作",
  introduction: "這是一間融合咖啡和藝術的特色咖啡廳。",
  opening_hour: "09:00",
  closing_hour: "22:00",
  address: "新北市文化路456號",
  telephone: "02-98765432",
  facebook: "https://www.facebook.com/artcoffee",
  ig: "https://www.instagram.com/artcoffee",
  rules: [
    {
      type: "time_limit",
      heading: true,
      content: "品味藝術，請於120分鐘內品嚐"
    },
    { type: "min_order", heading: 250, content: "低消金額為250元" },
    {
      type: "customize",
      heading: "本月活動",
      content: "藝術家分享會每週三舉辦"
    },
    {
      type: "customize",
      heading: "優惠活動",
      content: "購買咖啡贈送藝術明信片"
    },
    {
      type: "customize",
      heading: "優惠活動",
      content: "購買咖啡贈送藝術明信片"
    },
    {
      type: "customize",
      heading: "優惠活動",
      content: "購買咖啡贈送藝術明信片"
    }
  ],
  service_and_equipment: [
    { icon: "plug", type: "插座", content: true },
    { icon: "wifi", type: "免費Wi-Fi", content: true },
    { icon: "smoking_area", type: "吸菸區域", content: false },
    { icon: "dog", type: "店狗", content: false },
    { icon: "cat", type: "店貓", content: true },
    { icon: "customize", type: "特色1", content: "展示抽象畫作" },
    { icon: "customize", type: "特色2", content: "提供創意拿鐵" }
  ],
  primary_image:
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2047&q=80",
  secondary_image_1:
    "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  secondary_image_2:
    "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
};

export default storeDetail;
