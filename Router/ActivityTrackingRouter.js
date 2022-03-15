const activityTrackingRouter = require("express").Router();
const activityTrackingController = require("../Controllers/ActivityTrackingController");

activityTrackingRouter.get("/", activityTrackingController.getActivityTracking);
activityTrackingRouter.post(
  "/",
  activityTrackingController.addActivityTracking
);

activityTrackingRouter.post(
  "/:id/detail",
  activityTrackingController.addActivityTrackingDetail
);
activityTrackingRouter.put(
  "/:id",
  activityTrackingController.updateActivityTracking
);
activityTrackingRouter.put(
  "/:id/detail/:detailid",
  activityTrackingController.updateActivityTrackingDetail
);
////////////////////////////
activityTrackingRouter.get(
  "/:id",
  activityTrackingController.getActivityTrackingById
);
activityTrackingRouter.get(
  "/:id/detail",
  activityTrackingController.getActivityTrackingDetailByTrackingId
);

module.exports = activityTrackingRouter;
