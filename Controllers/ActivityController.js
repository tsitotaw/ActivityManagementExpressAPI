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
  let data = await activityService.getActivityType();

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

module.exports = {
  getActivityType,
  getActivityTypeById,
  postActivityType,
  updateActivityType,
  postActivityCategory,
  postActivitySubCategory,
  getActivityCategoryById,
  getActivitySubCategoryById,
};
