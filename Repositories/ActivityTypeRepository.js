const ActivityType = require("../Models/ActivityType");

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

const addActivitySubCategory = async (subcategory, typeId, categoryId) => {
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
};
