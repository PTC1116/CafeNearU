const pool = require('../util/db');

module.exports = {
  updateCommentDashboard: async () => {
    try {
      // Step 1: Fetch cafe_ids that are not in comment_dashboard
      const missingCafeIDsQuery = `
        SELECT DISTINCT c.cafe_id
        FROM 
          comments c
        LEFT JOIN 
          comment_dashboard cd
          ON c.cafe_id = cd.cafe_id
        WHERE cd.cafe_id IS NULL; 
      `;
      const [missingCafeIdsResult] = await pool.query(missingCafeIDsQuery);
      const missingCafeIds = missingCafeIdsResult.map((row) => row.cafe_id);

      // Step 2: Insert missing cafe_ids into comment_dashboard
      if (missingCafeIds.length > 0) {
        const insertQuery = `
                INSERT INTO comment_dashboard (cafe_id) VALUES ?;
              `;
        const insertValues = missingCafeIds.map((cafe_id) => [cafe_id]);
        await pool.query(insertQuery, [insertValues]);

        console.log('新增 cafe_id 到 comment_dashboard 成功');
      }

      // Step 3: Update comment_dashboard with aggregated data
      const query = `WITH NewRatings AS (
            SELECT
                cafe_id,
                AVG(total_rating) AS new_avg_total_rating,
                AVG(cleanliness) AS new_avg_cleanliness,
                AVG(service) AS new_avg_service,
                AVG(food) AS new_avg_food,
                AVG(wifi) AS new_avg_wifi,
                AVG(atmosphere) AS new_avg_atmosphere
            FROM
                comments
            GROUP BY
                cafe_id
        ),
        QuietStats AS (
            SELECT
                cafe_id,
                SUM(is_quiet) AS quiet_count,
                COUNT(*) AS total_comments,
                SUM(is_quiet) / COUNT(*) AS quiet_percentage
            FROM
                comments
            GROUP BY
                cafe_id
        ),
        CommentsCount AS (
            SELECT
                cafe_id,
                COUNT(id) AS total_comments
            FROM
                comments
            GROUP BY
                cafe_id
        )
        UPDATE comment_dashboard AS cd
        JOIN NewRatings AS nr ON cd.cafe_id = nr.cafe_id
        JOIN QuietStats AS qs ON cd.cafe_id = qs.cafe_id
        JOIN CommentsCount AS cc ON cd.cafe_id = cc.cafe_id
        SET
            cd.average_total_rating = nr.new_avg_total_rating,
            cd.average_cleanliness = nr.new_avg_cleanliness,
            cd.average_service = nr.new_avg_service,
            cd.average_food = nr.new_avg_food,
            cd.average_wifi = nr.new_avg_wifi,
            cd.average_atmosphere = nr.new_avg_atmosphere,
            cd.is_quiet = qs.quiet_percentage,
            cd.comment_count = cc.total_comments;`;

      const [result] = await pool.execute(query);
      console.log(
        `comment_dashboard 資料更新成功，更新 ${result.changedRows} 筆資料`,
      );
    } catch (error) {
      console.log('comment_dashboard 資料更新失敗:', error);
    } finally {
      pool.releaseConnection();
    }
  },
};
