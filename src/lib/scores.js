import knex from '../../db/knex';

export default class Scores {
  static getHighScores() {
    return knex.raw(`
      SELECT t.*
      FROM user_scores t
      ORDER BY t.score DESC
      LIMIT 10
    `);
  }

  static insertNewScore(userName, userScore) {
    return knex('user_scores')
      .insert({ name: userName, score: userScore })
      .returning(['name', 'score']);
  }
}
