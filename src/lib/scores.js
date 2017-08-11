import knex from '../../db/knex';

export default class Scores {
  static getHighScores() {
    return knex('user_scores')
      .orderBy('score', 'desc')
      .limit(10);
  }
}
