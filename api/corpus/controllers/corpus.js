'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {

  async find(ctx) {
    // 从请求的查询参数中获取各个查询参数
    const { Title_contains, Tag_ids, Direction, Difficulty, Type,AuthorID,created_at,State } = ctx.query;

    let entities;

    // 构建查询条件对象
    const queryParams = {};
    if (Title_contains) {
      queryParams.Title_contains = Title_contains;
    }
    if (Tag_ids) {
      queryParams.Tag_ids = Tag_ids;
    }
    if (Direction) {
      queryParams.Direction = Direction;
    }
    if (Difficulty) {
      queryParams.Difficulty = Difficulty;
    }
    if (Type) {
      queryParams.Type = Type;
    }
    if (AuthorID) {
      queryParams.AuthorID = AuthorID;
    }
    if (created_at) {
      queryParams.created_at = created_at;
    }
    if (State) {
      queryParams.State = State;
    }

    if (Object.keys(queryParams).length > 0) {
      // 使用Strapi的QueryBuilder进行多条件查询
      entities = await strapi.services.corpus.find(queryParams);
    } else {
      // 如果没有任何查询参数，返回所有corpus内容
      entities = await strapi.services.corpus.find();
    }
    return entities.map(entity => {
      // 对于每个corpus，可能需要进行适当的处理
      // 这里只返回entity的属性部分
      return entity;
    });
  },
};

