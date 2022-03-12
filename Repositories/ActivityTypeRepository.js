const ActivityType = require("../Models/ActivityType");

const getActivityType = async () => {
  return await ActivityType.find();
};

const getActivityTypeById = async (typeId) => {
  return await ActivityType.find({ _id: typeId });
};

const getActivityCategoryByTypeId = async (typeId) => {
  return await ActivityType.find(
    {
      _id: typeId,
    },
    {
      _id: 0,
      categories: 1,
    }
  );
};

/**
 * I will need to experiment more on how to filter the subcategories from the category
 * @param {*} typeId
 * @param {*} categoryId
 * @returns
 */
const getActivitySubCategoryByTypeAndCategoryId = async (
  typeId,
  categoryId
) => {
  return await ActivityType.find(
    {
      _id: typeId,
    },
    {
      _id: 0,
      categories: 1,
    }
  );
};

const addActivityType = async (type) => {
  return await ActivityType.create(type);
};
const addActivityCategory = async (category, typeId) => {
  return await ActivityType.updateOne(
    {
      _id: typeId,
    },
    {
      $push: {
        categories: category,
      },
    }
  );
};

const addActivitySubCategory = async (subcategory, categoryId, typeId) => {
  return await ActivityType.updateOne(
    {
      _id: typeId,
    },
    {
      $push: {
        "categories.$[c].subcategories": subcategory,
      },
    },
    {
      arrayFilters: [
        {
          "c._id": categoryId,
        },
      ],
    }
  );
};

module.exports = {
  addActivityType,
  addActivityCategory,
  addActivitySubCategory,
  getActivityType,
  getActivityTypeById,
  getActivityCategoryByTypeId,
  getActivitySubCategoryByTypeAndCategoryId,
};
