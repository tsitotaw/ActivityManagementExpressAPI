const activityService = require("./../Services/ActivityTypeService");

const postActivityType = async (req, res) => {
  let data = await activityService.addActivityType(req.body);

  res.json({
    success: true,
    data,
  });
};

const updateActivityType = async (req, res) => {
  let { id } = req.params;
  let data = await activityService.updateActivityType(req.body, id);

  res.json({
    success: true,
    data,
  });
};

const postActivityCategory = async (req, res) => {
  let { id } = req.params;
  let category = req.body;
  let data = await activityService.addActivityCategory(category, id);

  res.json({
    success: true,
    data,
  });
};

const updateActivityCategory = async (req, res) => {
  let { id, categoryid } = req.params;
  let category = req.body;
  let data = await activityService.updateActivityCategory(
    category,
    id,
    categoryid
  );

  res.json({
    success: true,
    data,
  });
};

const updateActivitySubCategory = async (req, res) => {
  let { id, categoryid, subcategoryid } = req.params;
  let data = req.body;
  let result = await activityService.updateActivityCategory(
    data,
    id,
    categoryid,
    subcategoryid
  );

  res.json({
    success: true,
    result,
  });
};

const postActivitySubCategory = async (req, res) => {
  let { id, categoryid } = req.params;
  let subcategory = req.body;
  let data = await activityService.addActivitySubCategory(
    subcategory,
    categoryid,
    id
  );

  res.json({
    success: true,
    data,
  });
};

const getActivityType = async (req, res) => {
  let { name } = req.query;
  let data = "";
  if (name == "") {
    data = await activityService.getActivityType();
  } else {
    data = await activityService.getActivityTypeByName(name);
  }

  res.json({
    success: true,
    data,
  });
};

const getActivityTypeById = async (req, res) => {
  let { id } = req.params;

  let data = await activityService.getActivityTypeById(id);

  res.json({
    success: true,
    data,
  });
};

const getActivityTypeByName = async (req, res) => {
  let { name } = req.query;
  console.log("Name triggered");
  let data = await activityService.getActivityTypeByName(name);

  res.json({
    success: true,
    data,
  });
};

const getActivityCategoryById = async (req, res) => {
  let { id } = req.params;

  let data = await activityService.getActivityCategoryByTypeId(id);

  res.json({
    success: true,
    data,
  });
};

const getActivitySubCategoryById = async (req, res) => {
  let { id, categoryid } = req.params;

  let data = await activityService.getActivitySubCategoryByTypeAndCategoryId(
    id,
    categoryid
  );

  res.json({
    success: true,
    data,
  });
};
const getActivitySubCategory = async () => {
  let data = await activityService.getActivitySubCategory();
};

///////// Get all lists of Categories///////
const getActivityCategories = async (req, res) => {
  let data = await activityService.getActivityCategories();

  res.json({
    success: true,
    data,
  });
};

module.exports = {
  getActivityType,
  getActivityTypeById,
  postActivityType,
  updateActivityType,
  postActivityCategory,
  postActivitySubCategory,
  getActivityCategoryById,
  getActivitySubCategoryById,
  getActivitySubCategory,
  ////
  getActivityCategories,
  updateActivityCategory,
  updateActivitySubCategory,
  getActivityTypeByName,
};
