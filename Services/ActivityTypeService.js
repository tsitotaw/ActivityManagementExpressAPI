const activityTypeRepository = require("./../Repositories/ActivityTypeRepository");

const addActivityType = async (type) => {
  return await activityTypeRepository.addActivityType(type);
};
const updateActivityType = async (type, id) => {
  return await activityTypeRepository.updateActivityType(type, id);
};

const addActivityCategory = async (category, typeId) => {
  return await activityTypeRepository.addActivityCategory(category, typeId);
};

const addActivitySubCategory = async (subcategory, categoryId, typeId) => {
  return await activityTypeRepository.addActivitySubCategory(
    subcategory,
    typeId,
    categoryId
  );
};

const getActivityType = async () => {
  return await activityTypeRepository.getActivityType();
};

const getActivityTypeById = async (typeId) => {
  return await activityTypeRepository.getActivityTypeById(typeId);
};

const getActivityCategoryByTypeId = async (typeId) => {
  return await activityTypeRepository.getActivityCategoryByTypeId(typeId);
};

const getActivitySubCategoryByTypeAndCategoryId = async (
  typeId,
  categoryId
) => {
  return await activityTypeRepository.getActivitySubCategoryByTypeAndCategoryId(
    typeId,
    categoryId
  );
};

///////////////
const getActivityCategories = async () => {
  return await activityTypeRepository.getActivityCategories();
};


module.exports = {
  addActivityType,
  updateActivityType,
  addActivityCategory,
  addActivitySubCategory,
  getActivityType,
  getActivityTypeById,
  getActivityCategoryByTypeId,
  getActivitySubCategoryByTypeAndCategoryId,
  /////////////
  getActivityCategories

};
