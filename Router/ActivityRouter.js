const activityRouter = require("express").Router();
const activityController = require("./../Controllers/ActivityController");

activityRouter.get("/", activityController.getActivityType);
activityRouter.post("/", activityController.postActivityType);
activityRouter.post("/:id/category", activityController.postActivityCategory);
activityRouter.put("/:id", activityController.updateActivityType);
activityRouter.post(
  "/:id/category/:categoryid/subcategory",
  activityController.postActivitySubCategory
);
activityRouter.get("/:id", activityController.getActivityTypeById);
activityRouter.get("/:id/category", activityController.getActivityCategoryById);
activityRouter.get(
  "/:id/category/:categoryid",
  activityController.getActivitySubCategoryById
);

module.exports = activityRouter;
