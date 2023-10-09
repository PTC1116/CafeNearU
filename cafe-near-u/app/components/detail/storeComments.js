const storeComments = {
  data: {
    summary: {
      total_comments: 3000,
      is_quiet: "20%",
      average_total_rating: 3.1,
      average_cleanliness: 3.6,
      average_service: 2.4,
      average_food: 3.6,
      average_wifi: 1.8,
      average_atmosphere: 3.6
    },
    comments: [
      {
        id: 1,
        rating: 4,
        created_at: "2023-08-19 12:34:56",
        content: "這裡的氛圍不錯，服務也不錯，就是食物稍微有些一般。",
        user: {
          id: "1",
          name: "Alice",
          picture: "頭貼url",
          school: "大學生"
        }
      },
      {
        id: 2,
        rating: 5,
        created_at: "2023-08-18 15:45:22",
        content: "真的是一個很安靜的地方，環境很乾淨，值得推薦。",
        user: {
          id: "2",
          name: "Bob",
          picture: "頭貼url",
          school: "上班族"
        }
      },
      {
        id: 3,
        rating: 2,
        created_at: "2023-08-17 09:10:08",
        content: "服務生的態度很差，食物也不好吃。",
        user: {
          id: "3",
          name: "Charlie",
          picture: "頭貼url",
          school: "學生"
        }
      }
      // 其他評論...
    ]
  }
};

export default storeComments;
