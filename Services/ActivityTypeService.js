const activityTypeRepository = require("./../Repositories/ActivityTypeRepository");

const addActivityType = async (type) => {
  return await activityTypeRepository.addActivityType(type);
};

const addActivityCategory = async (category, typeId) => {
  return await activityTypeRepository.addActivityCategory(category, typeId);
};

const addActivitySubCategory = async (subcategory, typeId, categoryId) => {
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

module.exports = {
  addActivityType,
  addActivityCategory,
  addActivitySubCategory,
  getActivityType,
  getActivityTypeById,
  getActivityCategoryByTypeId,
  getActivitySubCategoryByTypeAndCategoryId,
};
