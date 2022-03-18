const ActivityType = require("../Models/ActivityType");

const getActivityType = async () => {
  return await ActivityType.find();
};

const getActivityTypeById = async (typeId) => {
  return await ActivityType.find({ _id: typeId });
};

const getActivityTypeByName = async (name) => {
  console.log("Name triggered");
  return await ActivityType.find({ name: new RegExp("^" + name, "i") });
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

const updateActivityType = async (type, id) => {
  return await ActivityType.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        name: type.name,
        code: type.code,
      },
    }
  );
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

const updateActivityCategory = async (category, typeId, categoryId) => {
  return await ActivityType.updateOne(
    {
      _id: typeId,
    },
    {
      $set: {
        "categories.$[c].name": category.name,
        "categories.$[c].code": category.code,
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
const updateActivitySubCategory = async (
  subCategory,
  typeId,
  categoryId,
  subcategoryId
) => {
  return await ActivityType.updateOne(
    {
      _id: typeId,
    },
    {
      $set: {
        "categories.$[c].subcategories.$[s].name": subCategory.name,
        "categories.$[c].subcategories.$[s].code": subCategory.code,
        "categories.$[c].subcategories.$[s].uom": subCategory.uom,
      },
    },
    {
      arrayFilters: [
        {
          "c._id": categoryId,
        },
        {
          "s._id": subcategoryId,
        },
      ],
    }
  );
};
const getActivitySubCategory = async () => {
  return await ActivityType.find();
};

//////// get Categories of activities ////////
const getActivityCategories = async () => {
  return await ActivityType.distinct("categories");
};

module.exports = {
  addActivityType,
  updateActivityType,
  addActivityCategory,
  addActivitySubCategory,
  getActivityType,
  getActivityTypeById,
  getActivityTypeByName,
  getActivityCategoryByTypeId,
  getActivitySubCategoryByTypeAndCategoryId,
  getActivitySubCategory,
  ////
  getActivityCategories,
  updateActivityCategory,
  updateActivitySubCategory,
};
